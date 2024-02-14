// attendance-log.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AttendanceLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ type: 'timestamp', nullable: true })
  entrytime: Date;

  @Column({ type: 'timestamp', nullable: true })
  exittime: Date;
}
