import * as bcrypt from 'bcrypt';
import { User } from '../../user/entities/user.entity';

export class BcryptService {
  private static readonly SALT_ROUNDS: number = 7;

  verifyCredentials(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BcryptService.SALT_ROUNDS);
  }

  async hashUserPassword(user: User): Promise<User> {
    return {
      ...user,
      password: await this.hashPassword(user.password),
    } as User;
  }
}
