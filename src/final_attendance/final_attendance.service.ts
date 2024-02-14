// final-attendance.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThanOrEqual, Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';
import { AttendanceLog } from 'src/attendance/entities/attendance.entity';
import { User } from 'src/user/entities/user.entity';
import { FinalAttendance } from './entities/final_attendance.entity';
import { AttendanceEnum } from 'src/common/enums/attendance.enum';
import { Role } from 'src/user/types';

@Injectable()
export class FinalAttendanceService {
  constructor(
    @InjectRepository(AttendanceLog)
    private readonly attendanceLogRepository: Repository<AttendanceLog>,
    @InjectRepository(FinalAttendance)
    private readonly finalAttendanceRepository: Repository<FinalAttendance>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Cron('0 0 * * *') // Runs at midnight every day
  async aggregateAttendanceData() {
    const today = moment().startOf('day');
    const tomorrow = moment(today).add(1, 'day');

    // Retrieve all attendance logs for the current day
    const attendanceLogs = await this.attendanceLogRepository.find({
      where: {
        entrytime: MoreThanOrEqual(today.toDate()),
        exittime: LessThan(tomorrow.toDate()),
      },
    });

    // Process attendance logs and calculate total hours spent
    for (const log of attendanceLogs) {
      // Find the user based on the username
      const user = await this.userRepository.findOne({ where: { username: log.username } });
    
      if (user) {
        const totalHours = moment(log.exittime).diff(moment(log.entrytime), 'hours', true);
        const attendance = totalHours >= 5 ? AttendanceEnum.PRESENT : AttendanceEnum.ABSENT;
        const remark = totalHours < 5 ? 'Total hours spent in class less than 5, not present' : null;
    
        // Insert or update records in the FinalAttendance table
        const finalAttendance = await this.finalAttendanceRepository.findOne({
          where: {
            user: user,
            date: today.toDate(), // Extract date part only
          },
        });
    
        if (finalAttendance) {
          // Update existing record
          finalAttendance.attendance = attendance;
          finalAttendance.totalHours = totalHours;
          await this.finalAttendanceRepository.save(finalAttendance);
        } else {
          // Insert new record
          await this.finalAttendanceRepository.save({
            user: user,
            date: today.toDate(),
            attendance,
            totalHours,
            remark
          });
        }
      } else {
        console.error(`User not found for username: ${log.username}`);
      }
    }
    const unregisteredStudents = await this.userRepository.find({
      where: { role: Role.student }, // Assuming 'student' is the role for students
      relations: ['finalAttendance'],
    });

    // Add unregistered students to the FinalAttendance table with absent status
    for (const student of unregisteredStudents) {
      const existingRecord = await this.finalAttendanceRepository.findOne({
        where: { user: student, date: today.toDate() },
      });
    
      if (!existingRecord) {
        await this.finalAttendanceRepository.save({
          user: student,
          date: today.toDate(),
          attendance: AttendanceEnum.ABSENT,
          totalHours: 0,
          remark: null,
        });
      }
    }
  }
}