import { Class } from 'src/class/entities/class.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  subjectName: string;

  @ManyToOne(() => Class)
  class: Class;
}
