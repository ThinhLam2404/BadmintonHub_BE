import express from "express";
var router = express.Router();
import {
  signIn,
  signUp,
  currentUser,
  signOut,
} from "../controllers/auth.controller";
import { currentUserMiddleware } from "src/middlewares/current-user";

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/current-user", currentUserMiddleware, currentUser);
router.post("/signout", signOut);
export default router;
