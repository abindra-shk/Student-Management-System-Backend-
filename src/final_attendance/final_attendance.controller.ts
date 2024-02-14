import { Controller, Get } from '@nestjs/common';
import { FinalAttendanceService } from './final_attendance.service';

@Controller('final-attendance')
export class FinalAttendanceController {
  constructor(private readonly finalAttendanceService: FinalAttendanceService) {}

  @Get('aggregate')
  async aggregateAttendanceDataManually(): Promise<string> {
    await this.finalAttendanceService.aggregateAttendanceData();
    return 'Attendance aggregation triggered successfully!';
  }
}
