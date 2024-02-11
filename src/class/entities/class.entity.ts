import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';

@Entity()
export class Class{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  className: string;
}
