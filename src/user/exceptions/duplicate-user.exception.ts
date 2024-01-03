export class DuplicateUserException extends Error {
  constructor(message = 'User already exists') {
    super(message);
  }
}
