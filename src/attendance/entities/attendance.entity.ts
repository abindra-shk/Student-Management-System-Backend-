import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class AttendanceLog {
  @PrimaryColumn()
  username: string;

  @PrimaryColumn({ type: 'date' })
  date: Date;

  @Column({ type: 'timestamp', nullable: true })
  entrytime: Date;

  @Column({ type: 'timestamp', nullable: true })
  exittime: Date;
}
