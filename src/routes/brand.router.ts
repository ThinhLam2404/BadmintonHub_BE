import express from "express";
var router = express.Router();
import {createBrand, editBrand, getBrandList, deleteBrand} from "../controllers/brand.controller";

router.post("/", createBrand);
router.get("/", getBrandList);
router.put("/:id", editBrand);
router.delete("/:id", deleteBrand);

export default router;
