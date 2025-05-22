import express from "express";
const router = express.Router();
import accountsRouter from "./account.router";
import authRouter from "./auth.router";
import brandRouter from "./brand.router";
import discountRouter from "./discount.router";
import voucherRouter from "./voucher.router";

router.use("/accounts", accountsRouter);
router.use("/auth", authRouter);
router.use("/brands", brandRouter);
router.use("/discounts", discountRouter);
router.use("/vouchers", voucherRouter);

export default router;
