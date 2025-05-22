import express from "express";
var router = express.Router();
import { createVoucher, editVoucher, getVoucherList, deleteVoucher } from "../controllers/voucher.controller";

router.post("/", createVoucher);
router.get("/", getVoucherList);
router.put("/:id", editVoucher);
router.delete("/:id", deleteVoucher);
router.get("/validVoucher", getVoucherList);

export default router;
