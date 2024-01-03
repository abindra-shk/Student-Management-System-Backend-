import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { BcryptService } from '../../../authentication/services/bcrypt.service';
import { DuplicateUserException } from '../../exceptions/duplicate-user.exception';
import { CreateUserCommand } from '../create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly bcrypt: BcryptService,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    if (await this.userRepository.findOne({ where: { username: command.data.username } })) {
      throw new DuplicateUserException('Username already exists');
    }

    // if (command.data.phone && (await this.userRepository.findOne({ where: { phone: command.data.phone } }))) {
    //   throw new DuplicateUserException('Phone number already exists');
    // }

    const user = await this.userRepository.insert({ ...command.data, password: await this.bcrypt.hashPassword(command.data.password) });
    console.log(user);
    return user;
  }
}
