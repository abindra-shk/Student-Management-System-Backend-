import { Controller, Get } from '@nestjs/common';
import { FinalAttendanceService } from './final_attendance.service';

@Controller('final-attendance')
export class FinalAttendanceController {
  constructor(private readonly finalAttendanceService: FinalAttendanceService) {}

  @Get('aggregate')
  async aggregateAttendanceDataManually(){
    await this.finalAttendanceService.aggregateAttendanceData();
    return 'Attendance aggregation triggered successfully!';
  }

  @Get('top-attendance')
  async getTopAttendeesByClass(){
    return await this.finalAttendanceService.getTopAttendeesByClass(); 
  }

  @Get('AttendanceByDateAndClass')
  async getAttendanceByDateAndClass(){
    return await this.finalAttendanceService.getTotalAttendanceByClassAndDate();
  }
}
