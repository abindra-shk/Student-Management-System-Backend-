import { User } from '../../../user/entities/user.entity';

export type IUserResponse = Omit<User, 'createdAt | updatedAt'>;

export class UserDetailResponse extends User implements IUserResponse {
  constructor(props?: Partial<UserDetailResponse>) {
    super(props);
  }
}
