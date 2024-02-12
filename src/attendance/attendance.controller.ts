// attendance-log.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AttendanceLogService } from './attendance.service';

@Controller('attendance-log')
export class AttendanceLogController {
  constructor(private readonly attendanceLogService: AttendanceLogService) {}

  @Post()
  create(@Body('username') username: string) {
    return this.attendanceLogService.create(username);
  }

  @Get()
  findAll() {
    return this.attendanceLogService.findAll();
  }
}

