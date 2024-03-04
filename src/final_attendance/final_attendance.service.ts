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
import { Student } from 'src/student/entities/student.entity';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class FinalAttendanceService {
  constructor(
    @InjectRepository(FinalAttendance)
    private readonly finalAttendanceRepository: Repository<FinalAttendance>,
    private readonly attendancelogService: AttendanceLogService,
    private readonly userService: UserService,
    private readonly studentService: StudentService,

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
  for (let currentDate = moment('2024-02-01'); currentDate <= moment('2024-02-10'); currentDate.add(1, 'day')) {
    const testDate = currentDate.toDate();

    if (testDate.getDay() !== 6) {
      // Retrieve all attendance logs for the current day
      const attendanceLogs = await this.attendancelogService.findByDate(testDate);

      // Process attendance logs and calculate total hours spent
      for (const log of attendanceLogs) {
        // Find the user based on the username
        const student = await this.studentService.findOneByUsername(log.username);

        if (student) {
          const totalHours = Math.round(moment(log.exittime).diff(moment(log.entrytime), 'hours', true));
          const attendance = totalHours >= 5 ? AttendanceEnum.PRESENT : AttendanceEnum.ABSENT;
          const remark = totalHours < 5 ? 'Total hours spent in class less than 5, not present' : null;

          let finalAttendance = await this.finalAttendanceRepository.createQueryBuilder('finalAttendance')
            .leftJoinAndSelect('finalAttendance.student', 'student')
            .where('student.id = :studentId', { studentId: student.id })
            .andWhere('finalAttendance.date = :date', { date: testDate })
            .getOne();

          if (!finalAttendance) {
            finalAttendance = this.finalAttendanceRepository.create({
              student: student,
              date: testDate,
            });
          }

          finalAttendance.attendance = attendance;
          finalAttendance.totalHours = totalHours;
          finalAttendance.remark = remark;

          await this.finalAttendanceRepository.save(finalAttendance);
        } else {
          console.error(`Student not found for username: ${log.username}`);
        }
      }

      const unregisteredStudents = await this.studentService.findAll();

      // Add unregistered students to the FinalAttendance table with absent status
      for (const student of unregisteredStudents) {
        const existingRecord = await this.finalAttendanceRepository.createQueryBuilder('finalAttendance')
          .leftJoinAndSelect('finalAttendance.student', 'student')
          .where('student.id = :studentId', { studentId: student.id })
          .andWhere('finalAttendance.date = :date', { date: testDate })
          .getOne();

        if (!existingRecord) {
          await this.finalAttendanceRepository.save({
            student: student,
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

async getTopAttendeesByClass() {
  const topAttendees = await this.finalAttendanceRepository
    .createQueryBuilder('finalAttendance')
    .leftJoin('finalAttendance.student', 'student')
    .leftJoin('student.class', 'classEntity') 
    .select([
      'classEntity.className as className', 
      'student.id as studentId',
      'student.firstName as firstName',
      'student.lastName as lastName',
      'SUM(CASE WHEN finalAttendance.attendance = :present THEN 1 ELSE 0 END) AS presentCount',
      'SUM(CASE WHEN finalAttendance.attendance = :absent THEN 1 ELSE 0 END) AS absentCount',
    ])
    .where('finalAttendance.attendance = :present OR finalAttendance.attendance = :absent', {
      present: 'PRESENT',
      absent: 'ABSENT',
    })
    .groupBy('classEntity.className, student.id, student.firstName, student.lastName') // Group by class name
    .orderBy('classEntity.className', 'ASC') // Order by class name ascending
    .addOrderBy('presentCount', 'DESC') // Add additional ordering if needed
    .addOrderBy('absentCount', 'ASC') // Add additional ordering if needed
    .getRawMany();

  // Grouping the results by class name
  const groupedResults = {};
  topAttendees.forEach(record => {
    const className = record.classname;
    console.log('className',record)
    if (!groupedResults[className]) {
      groupedResults[className] = [];
    }
    groupedResults[className].push({
      studentId: record.studentid,
      firstName: record.firstname,
      lastName: record.lastname,
      presentCount: record.presentcount,
      absentCount: record.absentcount
    });
  });

  return groupedResults;
}

async getTotalAttendanceByClassAndDate() {
  const dates = await this.finalAttendanceRepository
    .createQueryBuilder('finalAttendance')
    .select('DISTINCT finalAttendance.date', 'date')
    .orderBy('finalAttendance.date', 'ASC')
    .getRawMany();

  const totalAttendance = [];

  for (const dateRecord of dates) {
    const date = dateRecord.date;

    // Count total attendees and absentees for the current date
    const totalAttendanceByDate = await this.finalAttendanceRepository
      .createQueryBuilder('finalAttendance')
      .select([
        'finalAttendance.date AS "date"',
        'COUNT(CASE WHEN finalAttendance.attendance = :present THEN 1 END) AS "totalAttendees"',
        'COUNT(CASE WHEN finalAttendance.attendance = :absent THEN 1 END) AS "totalAbsentees"',
      ])
      .where('finalAttendance.date = :date', { date: date })
      .groupBy('finalAttendance.date')
      .setParameters({ present: 'PRESENT', absent: 'ABSENT', date: date })
      .getRawOne();

    // Calculate total attendees and absentees for each class on the current date
    const attendanceByDateAndClass = await this.finalAttendanceRepository
      .createQueryBuilder('finalAttendance')
      .leftJoin('finalAttendance.student', 'student')
      .leftJoin('student.class', 'classEntity')
      .select([
        'classEntity.className AS "className"',
        'COUNT(CASE WHEN finalAttendance.attendance = :present THEN 1 END) AS "presentCount"',
        'COUNT(CASE WHEN finalAttendance.attendance = :absent THEN 1 END) AS "absentCount"',
      ])
      .where('finalAttendance.date = :date', { date: date })
      .groupBy('classEntity.className')
      .orderBy('classEntity.className', 'ASC')
      .setParameters({ present: 'PRESENT', absent: 'ABSENT', date: date })
      .getRawMany();

    totalAttendance.push({
      date: new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
      totalAttendees: totalAttendanceByDate.totalAttendees || 0,
      totalAbsentees: totalAttendanceByDate.totalAbsentees || 0,
      attendanceByClass: attendanceByDateAndClass.reduce((acc, curr) => {
        const className = curr.className;
        acc[className] = {
          presentCount: parseInt(curr.presentCount),
          absentCount: parseInt(curr.absentCount),
        };
        return acc;
      }, {}),
    });
  }

  return totalAttendance;
}

async getFinalAttendanceByStudentId(studentId: string) {
  return this.finalAttendanceRepository
    .createQueryBuilder('finalAttendance')
    .leftJoinAndSelect('finalAttendance.student', 'student')
    .where('student.id = :studentId', { studentId })
    .getMany();
}

}




