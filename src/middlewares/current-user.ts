import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  interface JWTPayload {
    email: string;
    password: string;
  }

  namespace Express {
    interface Request {
      currentUser?: JWTPayload;
    }
  }
}
const currentUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.token) return next();
  try {
    const payload = jwt.verify(
      req.session?.token,
      process.env.JWT_KEY!
    ) as JWTPayload;

    req.currentUser = payload;
  } catch (error) {
    return next(error);
  }
  next();
};

export { currentUserMiddleware };
