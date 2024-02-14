import { Class } from 'src/class/entities/class.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  subjectName: string;

  @Column({ type: 'int' })
  fullMarks: number;

  @Column({ type: 'int' })
  passMarks: number;

  @ManyToOne(() => Class)
  class: Class;


}
