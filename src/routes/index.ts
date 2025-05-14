import express from "express";
var router = express.Router();
import accountsRouter from "./accountRouter";

router.use("/accounts", accountsRouter);

export default router;
