import { Role } from "../types";

export class CreateUserDto {
    username: string;
    password: string;
    role: Role;
}
