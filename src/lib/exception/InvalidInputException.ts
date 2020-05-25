export const InvalidInputExceptionName = "InvalidInputException";

export class InvalidInputException extends Error {
  constructor(message: string) {
    super(message);
    this.name = InvalidInputExceptionName;
  }
}
