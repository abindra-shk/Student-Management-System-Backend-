import { Role } from "src/user/types";

export class CreateTeacherDto {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  mobile: string;
  joiningDate: Date;
  qualification: string;
  experience: number;
  email: string;
  username: string;
  password: string;
  readonly role: Role;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  subjects: {subjectName: string; classId: string}[]

}
