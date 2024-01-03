import { Role } from "../types";

export class CreateUserCommand {
  constructor(
    readonly data: {
      readonly username: string;
      readonly password: string;
      readonly role: Role;
    },
  ) {}
}
