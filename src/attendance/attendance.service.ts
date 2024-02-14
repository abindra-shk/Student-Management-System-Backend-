// attendance-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceLogDto } from './dto/create-attendance.dto';
import { AttendanceLog } from './entities/attendance.entity';


@Injectable()
export class AttendanceLogService {
  constructor(
    @InjectRepository(AttendanceLog)
    private attendanceLogRepository: Repository<AttendanceLog>,
  ) {}

  async create(createAttendanceLogDto: CreateAttendanceLogDto) {
    const attendanceLog = this.attendanceLogRepository.create(createAttendanceLogDto);
    return this.attendanceLogRepository.save(attendanceLog);
  }

  async createAll(createAttendanceLogDtoArray: CreateAttendanceLogDto[]){
    const createdAttendanceLogs = [];
    for (const dto of createAttendanceLogDtoArray) {
      const attendanceLog = this.attendanceLogRepository.create(dto);
      const createdAttendanceLog = await this.attendanceLogRepository.save(attendanceLog);
      createdAttendanceLogs.push(createdAttendanceLog);
    }
    return createdAttendanceLogs;
  }

  async findAll() {
    return this.attendanceLogRepository.find();
  }

  async findByDate(date: Date){
    return this.attendanceLogRepository.find({ where: { date: date } });
  }
  // async findOne(username: string, date: Date): Promise<AttendanceLog | undefined> {
  //   return this.attendanceLogRepository.findOne({ username, date });
  // }


  async remove(username: string, date: Date): Promise<void> {
    await this.attendanceLogRepository.delete({ username, date });
  }
}
