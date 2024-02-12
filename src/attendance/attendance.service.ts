// attendance-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceLog } from './entities/attendance.entity';


@Injectable()
export class AttendanceLogService {
  constructor(
    @InjectRepository(AttendanceLog)
    private attendanceLogRepository: Repository<AttendanceLog>,
  ) {}

  async create(username: string) {
    const attendanceLog = this.attendanceLogRepository.create({ username });
    return this.attendanceLogRepository.save(attendanceLog);
  }

  async findAll() {
    return this.attendanceLogRepository.find();
  }
}
