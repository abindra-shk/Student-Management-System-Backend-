import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../../user/entities/user.entity';
import { BcryptService } from '../../services/bcrypt.service';



@Injectable()
export class DatabaseStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly bcryptService: BcryptService,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username', {
        username,
      })
      .select(['user.id', 'user.username', 'user.password'])
      .getOne();

    if (!user) {
      throw new UnauthorizedException('Invalid username or password supplied');
    }

    if (await this.bcryptService.verifyCredentials(user, password)) {
      return user;
    }

    throw new UnauthorizedException('Invalid username or password supplied');
  }



}
