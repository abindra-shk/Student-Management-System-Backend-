import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinalAttendanceService } from './final_attendance.service';
import { CreateFinalAttendanceDto } from './dto/create-final_attendance.dto';
import { UpdateFinalAttendanceDto } from './dto/update-final_attendance.dto';

@Controller('final-attendance')
export class FinalAttendanceController {
  constructor(private readonly finalAttendanceService: FinalAttendanceService) {}

}
