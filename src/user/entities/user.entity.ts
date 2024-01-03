import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { Role } from "../types";

@Entity()
export class User {
  constructor(props?: Partial<User>) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Exclude()
  @Column({
    nullable: true,
    select: false,
  })
  readonly password: string;


  @Column({
    type: 'enum',
    enum: Role,
    default: Role.student,
  })
  role: Role;

  @Exclude()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  readonly updatedAt: Date;
}
