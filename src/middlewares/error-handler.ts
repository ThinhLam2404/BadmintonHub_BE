import { Request, Response, NextFunction } from "express";
import { CustomError } from "src/errors";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ errors: err.generateErrors() });
  }

  res.status(500).json({ errors: ["Something went wrong"] });
};
export default errorHandler;
