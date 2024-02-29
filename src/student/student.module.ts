import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { UserService } from 'src/user/http/services/user.service';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { ClassModule } from 'src/class/class.module';
import { FinalAttendance } from 'src/final_attendance/entities/final_attendance.entity';
import { FinalAttendanceModule } from 'src/final_attendance/final_attendance.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student, User]), UserModule,ClassModule, FinalAttendanceModule],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
