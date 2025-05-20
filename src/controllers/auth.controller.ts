import { Request, Response, NextFunction } from "express";
import { handleSignIn, handleSignUp } from "../services/auth.service";
const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await handleSignIn(email, password);
    if (result) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, username, phone, address } = req.body;
    const result = await handleSignUp(email, password);
    if (result) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

export { signIn, signUp };
