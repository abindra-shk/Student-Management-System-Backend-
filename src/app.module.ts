import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { CoreModule } from './core/core.module';
import { MulterModule } from '@nestjs/platform-express';
import { TeacherModule } from './teacher/teacher.module';
import { AuthenticationModule } from './authentication/authentication.module';
import dbconfig from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbconfig),
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot(),
    CoreModule,
    UserModule,
    TeacherModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// {
//   type: 'postgres',
//   host: '110.44.123.230',
//   port: 5432,
//   username: 'test',
//   password: 'test@1234',
//   database: 'testdb',
//   // entities: ['../**/*.entity.{ts,js}'],
//   synchronize: true,
//   autoLoadEntities: true,
// }