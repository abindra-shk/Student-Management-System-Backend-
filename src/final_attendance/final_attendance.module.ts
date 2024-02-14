import { Module } from '@nestjs/common';
import { FinalAttendanceService } from './final_attendance.service';
import { FinalAttendanceController } from './final_attendance.controller';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [FinalAttendanceController],
  providers: [FinalAttendanceService],
})
export class FinalAttendanceModule {}
