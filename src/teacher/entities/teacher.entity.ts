import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { User } from "src/user/entities/user.entity";
import { Subject } from "src/subject/entities/subject.entity";




@Entity()
export class Teacher {
  constructor(props?: Partial<Teacher>) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  mobile: string;

  @Column()
  joiningDate: Date;

  @Column()
  qualification: string;

  @Column()
  experience: number;

  @Column()
  email: string;

  @OneToOne(() => User, { cascade: true, eager: true })
  @JoinColumn()
  user: User;

  @ManyToMany(() => Subject, { cascade: true })
  @JoinTable({
    name: 'teacher_subject', // Name of the join table
    joinColumn: {
      name: 'teacher_id', // Name of the column referencing the Teacher entity
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'subject_id', // Name of the column referencing the Subject entity
      referencedColumnName: 'id',
    },
  })
  subjects: Subject[]; // Corrected type to Subject[]
}
