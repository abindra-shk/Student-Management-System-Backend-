import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { User } from "src/user/entities/user.entity";



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
}
