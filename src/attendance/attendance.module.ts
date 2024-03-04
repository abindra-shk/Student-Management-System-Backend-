import { Module } from '@nestjs/common';
import { AttendanceLogController } from './attendance.controller';
import { AttendanceLogService } from './attendance.service';
import { AttendanceLog } from './entities/attendance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';


@Module({
  imports: [TypeOrmModule.forFeature([AttendanceLog]),StudentModule],
  controllers: [AttendanceLogController],
  providers: [AttendanceLogService],
  exports: [AttendanceLogService]
})
export class AttendanceModule {}
