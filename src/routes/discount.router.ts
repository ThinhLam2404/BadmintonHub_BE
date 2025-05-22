import express from "express";
var router = express.Router();
import { createDiscount, editDiscount, getDiscountList, deleteDiscount } from "../controllers/discount.controller";

router.post("/", createDiscount);
router.get("/", getDiscountList);
router.put("/:id", editDiscount);
router.delete("/:id", deleteDiscount);
router.get("/validDiscount", getDiscountList);

export default router;
