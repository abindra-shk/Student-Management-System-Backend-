import { User } from '../../user/entities/user.entity';

export interface TokenStorage {
  readonly generateToken: (user: any) => Promise<string>;
  readonly validateToken: (token: string) => Promise<any>;
}
