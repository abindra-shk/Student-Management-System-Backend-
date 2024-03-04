import { Controller, Get, Param, Post } from '@nestjs/common';
import { FinalAttendanceService } from './final_attendance.service';

@Controller('final-attendance')
export class FinalAttendanceController {
  constructor(private readonly finalAttendanceService: FinalAttendanceService) {}

  @Get('aggregate')
  async aggregateAttendanceDataManually(){
    await this.finalAttendanceService.aggregateAttendanceData();
    return 'Attendance aggregation triggered successfully!';
  }

  @Post('aggregate/:username')
  async aggregateAttendanceData(@Param('username') username: string) {
    try {
      await this.finalAttendanceService.aggregateAttendance(username);
      return { success: true, message: 'Attendance data aggregated successfully.' };
    } catch (error) {
      return { success: false, message: 'Failed to aggregate attendance data.', error };
    }
  }
  @Get('top-attendance')
  async getTopAttendeesByClass(){
    return await this.finalAttendanceService.getTopAttendeesByClass(); 
  }

  @Get('AttendanceByDateAndClass')
  async getAttendanceByDateAndClass(){
    return await this.finalAttendanceService.getTotalAttendanceByClassAndDate();
  }

  @Get('student/:studentId')
  async getFinalAttendanceByStudentId(@Param('studentId') studentId: string) {
    return this.finalAttendanceService.getFinalAttendanceByStudentId(studentId);
  }
}
