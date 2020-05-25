export const ResourceNotFoundExceptionName = "ResourceNotFoundException";

export class ResourceNotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = ResourceNotFoundExceptionName;
  }
}
