import express from "express";
var router = express.Router();
import { createDiscount, editDiscount, getDiscountList, deleteDiscount, getValidDiscounts } from "../controllers/discount.controller";

router.post("/", createDiscount);
router.get("/", getDiscountList);
router.put("/:id", editDiscount);
router.delete("/:id", deleteDiscount);
router.get("/valid-discount", getValidDiscounts);

export default router;
