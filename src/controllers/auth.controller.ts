import { Request, Response, NextFunction } from "express";
import { handleSignIn, handleSignUp } from "../services/auth.service";
import { BadRequestError } from "src/errors";
const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await handleSignIn(email, password);
    if (!result) {
      return next(new BadRequestError("Invalid credentials"));
    } else {
      req.session = { token: result };
      res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.log(error);
  }
};

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, username, phone, address } = req.body;
    const result = await handleSignUp(
      email,
      password,
      username,
      phone,
      address
    );
    if (!result) {
      return next(
        new BadRequestError("user with the same email already exists")
      );
    } else {
      req.session = { token: result };
      res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.log(error);
  }
};

const currentUser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ currentUser: req.currentUser });
};

const signOut = (req: Request, res: Response, next: NextFunction) => {
  req.session = null;
  res.status(200).json({ message: "Logout successful" });
};
export { signIn, signUp, currentUser, signOut };
