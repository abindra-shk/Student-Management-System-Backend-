import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { BcryptService } from 'src/authentication/services/bcrypt.service';
import { comparePasswords } from 'src/authentication/http/controllers/authentication.controller';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/user/commands/create-user.command';
import { CreateUserRequest } from '../requests/create-user.request';
import { Role } from 'src/user/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly bcrypt: BcryptService,
    private readonly commandBus: CommandBus
  ) {}

  // async create(createUserDto: any) {
  //   const user = this.userRepository.create({
  //     username: createUserDto.username,
  //     password: createUserDto.password,
  //     role: createUserDto.role,
  //   });
  //   return this.userRepository.save(user);
  // }


    async create(createUserDto: CreateUserRequest) {
    // Use the command bus logic for user creation
    const userdata = await this.commandBus.execute(new CreateUserCommand(createUserDto));
    return userdata;
  }
  

  async findAll() {
    return this.userRepository.createQueryBuilder("user").getMany();
  }

  async findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }
  
  async findOneByUsername(username: string) {
    return this.userRepository.findOne({ where: { username: username } });
  }

  async findUnregisteredStudents(){
    return this.userRepository.find({
      where: { role: Role.student },
    });
  }

  async changePassword(id: number, data) {
    const user: any = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id=:id", { id: id })
      .addSelect("user.password")
      .getOne();
    const areEqual= await comparePasswords(user.password, data.oldPassword);
    if (!areEqual) {
      throw new HttpException(
        "Username or password is incorrect",
        HttpStatus.NOT_ACCEPTABLE
      );
    } else {
      return this.userRepository.createQueryBuilder("user")
        .update(User)
        .where("user.id=:id", { id: +id })
        .set({
          password: await this.bcrypt.hashPassword(data.password)
        })
        .execute();
    }
  }

  async changePasswordForUser(id: number, data) {
    return this.userRepository.createQueryBuilder("user")
      .update(User)
      .where("user.id=:id", { id: +id })
      .set({
        password: await this.bcrypt.hashPassword(data.password)
      })
      .execute();
  }


  async update(id, data) {
    return this.userRepository.createQueryBuilder("user")
      .update(User)
      .where("user.id=:id", { id: +id })
      .set({
        ...data
      })
      .execute();
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }
}


