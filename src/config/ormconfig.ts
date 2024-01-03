import { DataSource, DataSourceOptions } from 'typeorm';
import database from './database';

export const connectionSource = new DataSource({
  ...database,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  migrations: [__dirname + '/../migrations/**/*.ts'],
} as DataSourceOptions);
