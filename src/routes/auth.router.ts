import express from "express";
var router = express.Router();
import { signIn, signUp } from "../controllers/auth.controller";

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
