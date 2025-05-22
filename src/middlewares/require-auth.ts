import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "src/errors";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    return next(new NotAuthorizedError());
  }
  next();
};
export { requireAuth };
