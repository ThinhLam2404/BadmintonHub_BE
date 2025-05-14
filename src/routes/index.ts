import express from "express";
var router = express.Router();
import accountsRouter from "./account.router";

router.use("/accounts", accountsRouter);

export default router;
