import { Class } from "src/class/entities/class.entity";
import { Role } from "src/user/types";

export class CreateStudentDto {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  rollNo: string;
  class: string;
  guardianName: string;
  guardianPhone: string;
  address: string;
  username: string;
  password: string;
  readonly role: Role;
}
