import { CustomError } from "./custom.err";

export class DatabaseConnectionError extends CustomError {
  statusCode = 404;
  constructor() {
    super("db connection error");
  }
  generateErrors() {
    return [{ message: "db connection error" }];
  }
}
