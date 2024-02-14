// marks.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { ResultEnum } from 'src/common/enums/result.enum';

@Entity()
export class Marks {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student)
  @JoinColumn()
  student: Student;

  @ManyToOne(() => Subject)
  @JoinColumn()
  subject: Subject;

  @Column()
  academicYear: number;

  @Column()
  marksObtained: number;

  @Column({
    type: 'enum',
    enum: ResultEnum,
    default: ResultEnum.FAIL,
  })
  attendance: ResultEnum;
}
