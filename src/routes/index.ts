import express from "express";
const router = express.Router();
import accountsRouter from "./account.router";
import authRouter from "./auth.router";

router.use("/accounts", accountsRouter);
router.use("/auth", authRouter);

export default router;
