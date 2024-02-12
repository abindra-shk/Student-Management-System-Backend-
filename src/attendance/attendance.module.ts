import { Module } from '@nestjs/common';
import { AttendanceLogController } from './attendance.controller';
import { AttendanceLogService } from './attendance.service';
import { AttendanceLog } from './entities/attendance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([AttendanceLog])],
  controllers: [AttendanceLogController],
  providers: [AttendanceLogService],
})
export class AttendanceModule {}
