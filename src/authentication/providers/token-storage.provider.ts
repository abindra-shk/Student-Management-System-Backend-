import { Provider } from '@nestjs/common';
import { JwtStorage } from '../storage/jwt.storage';

export const TokenStorageProvider = {
  provide: 'TokenStorage',
  useClass: JwtStorage,
} as Provider;
