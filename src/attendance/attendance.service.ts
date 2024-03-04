// attendance-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceLogDto } from './dto/create-attendance.dto';
import { AttendanceLog } from './entities/attendance.entity';
import { StudentService } from 'src/student/student.service';


@Injectable()
export class AttendanceLogService {
  constructor(
    @InjectRepository(AttendanceLog)
    private attendanceLogRepository: Repository<AttendanceLog>,
    private readonly studentService: StudentService,

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

  async getAttendanceLogByStudentId(studentId: string) {
    // Retrieve student with class and user information
    const student = await this.studentService.findOne(studentId);
    if (!student) {
      // Handle student not found
      return null;
    }

    // Retrieve username from the student's user entity
    const { user } = student;
    const username = user ? user.username : null;

    // Query attendance log records based on the retrieved username
    return this.attendanceLogRepository
    .createQueryBuilder('attendanceLog')
    .where('attendanceLog.username = :username', { username })
    .orderBy('attendanceLog.date', 'DESC')
    .getMany();
  }

  async findByUsername(username: string) {
    return this.attendanceLogRepository
      .createQueryBuilder('attendanceLog')
      .where('attendanceLog.username = :username', { username })
      .getMany();
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
