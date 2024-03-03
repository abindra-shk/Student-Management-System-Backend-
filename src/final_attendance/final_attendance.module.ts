import { Module } from '@nestjs/common';
import { FinalAttendanceService } from './final_attendance.service';
import { FinalAttendanceController } from './final_attendance.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from 'src/user/user.module';
import { AttendanceModule } from 'src/attendance/attendance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinalAttendance } from './entities/final_attendance.entity';
import { Student } from 'src/student/entities/student.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [ScheduleModule.forRoot(), TypeOrmModule.forFeature([FinalAttendance]), AttendanceModule, UserModule, StudentModule],
  controllers: [FinalAttendanceController],
  providers: [FinalAttendanceService],
  exports: [FinalAttendanceService],
})
export class FinalAttendanceModule {}
