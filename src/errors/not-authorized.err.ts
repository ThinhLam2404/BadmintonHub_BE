import { CustomError } from "./custom.err";

export class NotAuthorizedError extends CustomError {
  statusCode = 404;
  constructor() {
    super("not authorized");
  }
  generateErrors() {
    return [{ message: "not authorized" }];
  }
}
