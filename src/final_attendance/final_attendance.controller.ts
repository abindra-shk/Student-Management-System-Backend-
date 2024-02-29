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
  async getTopAttendanceLogs(){
    return await this.finalAttendanceService.getTopAttendanceLogs();
   
  }

  @Get('absent-attendance')
  async getTopAbsentAttendanceLogs(){
    return await this.finalAttendanceService.getTopAbsentAttendanceLogs();
   
  }
}
