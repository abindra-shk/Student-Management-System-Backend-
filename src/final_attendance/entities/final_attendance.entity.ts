// final-attendance.entity.ts
import { AttendanceEnum } from 'src/common/enums/attendance.enum';
import { Student } from 'src/student/entities/student.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class FinalAttendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({
    type: 'enum',
    enum: AttendanceEnum,
    default: AttendanceEnum.ABSENT,
  })
  attendance: AttendanceEnum;

  @Column({ nullable: true })
  totalHours: number;

  @Column({ nullable: true })
  remark: string;

  @ManyToOne(() => Student)
  @JoinColumn()
  student: Student;


}
