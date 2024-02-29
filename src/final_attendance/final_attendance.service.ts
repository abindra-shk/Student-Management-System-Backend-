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
import { AttendanceLogService } from 'src/attendance/attendance.service';
import { UserService } from 'src/user/http/services/user.service';

@Injectable()
export class FinalAttendanceService {
  constructor(
    @InjectRepository(FinalAttendance)
    private readonly finalAttendanceRepository: Repository<FinalAttendance>,
    private readonly attendancelogService: AttendanceLogService,
    private readonly userService: UserService,

  ) {}

  @Cron('0 0 * * *') // Runs at midnight every day
//   async aggregateAttendanceData() {
//     const today = moment().startOf('day');
//     const tomorrow = moment(today).add(1, 'day');
//     const testdate =new Date('2024-02-05')

//     if(testdate.getDay() !== 6){
//     // Retrieve all attendance logs for the current day
//     // const attendanceLogs = await this.attendancelogService.findByDate(today.toDate(),);
//     const attendanceLogs = await this.attendancelogService.findByDate(testdate);

//     // Process attendance logs and calculate total hours spent
//     for (const log of attendanceLogs) {
//       // Find the user based on the username
//       const user = await this.userService.findOneByUsername(log.username)
    
//       if (user) {
//         // const totalHours = moment(log.exittime).diff(moment(log.entrytime), 'hours', true);
//         const totalHours = Math.round(moment(log.exittime).diff(moment(log.entrytime), 'hours', true));
//         const attendance = totalHours >= 5 ? AttendanceEnum.PRESENT : AttendanceEnum.ABSENT;
//         const remark = totalHours < 5 ? 'Total hours spent in class less than 5, not present' : null;


//         let finalAttendance = await this.finalAttendanceRepository.createQueryBuilder('finalAttendance')
//         .leftJoinAndSelect('finalAttendance.user', 'user')
//         .where('user.id = :userId', { userId: user.id })
//         .andWhere('finalAttendance.date = :date', { date: testdate })
//         .getOne();
  
    
//         if (!finalAttendance) {
//           finalAttendance = this.finalAttendanceRepository.create({
//             user: user,
//             date: testdate,
//           });
//         }
        
//         finalAttendance.attendance = attendance;
//         finalAttendance.totalHours = totalHours;
//         finalAttendance.remark = remark;

//         await this.finalAttendanceRepository.save(finalAttendance);
//       } else {
//         console.error(`User not found for username: ${log.username}`);
//       }
//     }
//     const unregisteredStudents = await this.userService.findUnregisteredStudents();
//     console.log('unregisteredstudents')
//     // Add unregistered students to the FinalAttendance table with absent status
//     for (const student of unregisteredStudents) {
    
//       const existingRecord = await this.finalAttendanceRepository.createQueryBuilder('finalAttendance')
//       .leftJoinAndSelect('finalAttendance.user', 'user')
//       .where('user.id = :userId', { userId: student.id })
//       .andWhere('finalAttendance.date = :date', { date: testdate })
//       .getOne();
//       console.log('existing',existingRecord)
    
//       if (!existingRecord) {
//         await this.finalAttendanceRepository.save({
//           user: student,
//           date: testdate,
//           attendance: AttendanceEnum.ABSENT,
//           totalHours: 0,
//           remark: null,
//         });
//       }
//     }
//     } else {
//       console.log('The provided date is a Saturday.');
//     }
// }
async aggregateAttendanceData() {
  for (let currentDate = moment('2024-02-06'); currentDate <= moment('2024-02-10'); currentDate.add(1, 'day')) {
    const testDate = currentDate.toDate();

    if (testDate.getDay() !== 6) {
      // Retrieve all attendance logs for the current day
      const attendanceLogs = await this.attendancelogService.findByDate(testDate);

      // Process attendance logs and calculate total hours spent
      for (const log of attendanceLogs) {
        // Find the user based on the username
        const user = await this.userService.findOneByUsername(log.username);

        if (user) {
          const totalHours = Math.round(moment(log.exittime).diff(moment(log.entrytime), 'hours', true));
          const attendance = totalHours >= 5 ? AttendanceEnum.PRESENT : AttendanceEnum.ABSENT;
          const remark = totalHours < 5 ? 'Total hours spent in class less than 5, not present' : null;

          let finalAttendance = await this.finalAttendanceRepository.createQueryBuilder('finalAttendance')
            .leftJoinAndSelect('finalAttendance.user', 'user')
            .where('user.id = :userId', { userId: user.id })
            .andWhere('finalAttendance.date = :date', { date: testDate })
            .getOne();

          if (!finalAttendance) {
            finalAttendance = this.finalAttendanceRepository.create({
              user: user,
              date: testDate,
            });
          }

          finalAttendance.attendance = attendance;
          finalAttendance.totalHours = totalHours;
          finalAttendance.remark = remark;

          await this.finalAttendanceRepository.save(finalAttendance);
        } else {
          console.error(`User not found for username: ${log.username}`);
        }
      }

      const unregisteredStudents = await this.userService.findUnregisteredStudents();

      // Add unregistered students to the FinalAttendance table with absent status
      for (const student of unregisteredStudents) {
        const existingRecord = await this.finalAttendanceRepository.createQueryBuilder('finalAttendance')
          .leftJoinAndSelect('finalAttendance.user', 'user')
          .where('user.id = :userId', { userId: student.id })
          .andWhere('finalAttendance.date = :date', { date: testDate })
          .getOne();

        if (!existingRecord) {
          await this.finalAttendanceRepository.save({
            user: student,
            date: testDate,
            attendance: AttendanceEnum.ABSENT,
            totalHours: 0,
            remark: null,
          });
        }
      }
    } else {
      console.log(`Skipping Saturday ${moment(testDate).format('YYYY-MM-DD')}`);
    }
  }
}
}
