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
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { SubjectModule } from './subject/subject.module';
import { AttendanceModule } from './attendance/attendance.module';
import { MarksModule } from './marks/marks.module';
import dbconfig from './config/database.config';
import { ScheduleModule } from '@nestjs/schedule';
import { FinalAttendanceModule } from './final_attendance/final_attendance.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: '110.44.123.230',
        port: 5432,
        username: 'test',
        password: 'test@1234',
        database: 'testdb',
        synchronize: true,
        autoLoadEntities: true,
      }
    ),
    MulterModule.register({
      dest: './files',
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    CoreModule,
    UserModule,
    TeacherModule,
    AuthenticationModule,
    StudentModule,
    ClassModule,
    SubjectModule,
    AttendanceModule,
    MarksModule,
    AddressModule,
    FinalAttendanceModule,
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



// TypeOrmModule.forRoot(
//   {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'minor@1234',
//     database: 'student_mis',
//     // entities: ['../**/*.entity.{ts,js}'],
//     synchronize: true,
//     autoLoadEntities: true,
//   }
// ),