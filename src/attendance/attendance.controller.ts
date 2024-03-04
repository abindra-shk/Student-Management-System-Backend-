// attendance-log.controller.ts

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AttendanceLogService } from './attendance.service';
import { CreateAttendanceLogDto } from './dto/create-attendance.dto';


@Controller('attendance-logs')
export class AttendanceLogController {
  constructor(private readonly attendanceLogService: AttendanceLogService) {}

  @Post()
  async create(@Body() createAttendanceLogDto: CreateAttendanceLogDto){
    return this.attendanceLogService.create(createAttendanceLogDto);
  }

  @Post('all-attendance')
  async createAll(@Body() createAttendanceLogDtoArray: CreateAttendanceLogDto[]) {
    return this.attendanceLogService.createAll(createAttendanceLogDtoArray);
  }

  @Get()
  async findAll(){
    return this.attendanceLogService.findAll();
  }

  @Get('byDate/:Date')
  async findbyDate(@Param('Date') date: Date){
    return this.attendanceLogService.findByDate(date);
  }

  @Get('student/:studentid')
  async findOne(@Param('studentid') studentid: string,){
    return this.attendanceLogService.getAttendanceLogByStudentId(studentid);
  }


  @Delete(':username/:date')
  async remove(@Param('username') username: string, @Param('date') date: Date) {
    return this.attendanceLogService.remove(username, date);
  }
}
