export class CreateUserException extends Error {
  constructor(message = 'Could not create user.') {
    super(message);
  }
}
