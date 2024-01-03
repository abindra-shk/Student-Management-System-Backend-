import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { UserService } from 'src/user/http/services/user.service';
import { Role } from 'src/user/types';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
    private readonly userService: UserService,
  ) {}

  async create(createTeacherDto: any) {
    const user = await this.userService.create({
      username: createTeacherDto.username,
      password: createTeacherDto.password,
      role: Role.teacher,
      
    });
    console.log(user.raw)

    // Create teacher with the user ID
    const teacher = this.teacherRepository.create({
      firstName: createTeacherDto.firstName,
      lastName: createTeacherDto.lastName,
      gender: createTeacherDto.gender,
      dateOfBirth: createTeacherDto.dateOfBirth,
      mobile: createTeacherDto.mobile,
      joiningDate: createTeacherDto.joiningDate,
      qualification: createTeacherDto.qualification,
      experience: createTeacherDto.experience,
      email: createTeacherDto.email,
      user: user.raw[0], // Assign the user entity
    });
    // console.log(createTeacherDto)

    return this.teacherRepository.save(teacher);
  }
  

  async findAll(){
    return this.teacherRepository.createQueryBuilder("teacher").getMany();
  }

  async findOne(id: number) {
    return this.teacherRepository.findOne({ where: { id: id.toString() } });
  }

  async update(id, data) {
    return this.teacherRepository.createQueryBuilder("user")
      .update(Teacher)
      .where("user.id=:id", { id: +id })
      .set({
        ...data
      })
      .execute();
  }

  async remove(id: string) {
    await this.teacherRepository.delete(id);
  }
}
