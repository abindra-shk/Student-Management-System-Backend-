import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file
export const dbconfig = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port:
    (process.env.DATABASE_PORT && parseInt(process.env.DATABASE_PORT, 10)) ||
    3306,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  synchronize: process.env.DATABASE_SCHEMA_SYNC === 'true',
  autoLoadEntities: true,
  bigNumberStrings: false,
  // logging: process.env.TYPEORM_QUERY_LOGGING === 'true',
  // extra: {
  //   max: (process.env.DB_CONNECTION_POOL_MAX && parseInt(process.env.DB_CONNECTION_POOL_MAX, 10)) || 5,
  // },
} as TypeOrmModuleOptions;

export const DATABASE_URL = process.env.DATABASE_URL;
export default dbconfig;
