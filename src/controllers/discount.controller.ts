import { Request, Response, NextFunction } from "express";
import { discountService } from "../services/discount.service";

const createDiscount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { percent, expired_at } = req.body;
        const result = await discountService.createDiscount(percent, expired_at);
        if (result) {
            res.status(200).json({ message: "Discount created successfully" });
        } else {
            res.status(500).json({ message: "Failed to create brand" });
        }
    } catch (error) {
        console.log(error);
    }
};

const editDiscount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { discount_id, percent, expired_at } = req.body;
        const result = await discountService.editDiscount(discount_id, percent, expired_at);
        if (result) {
            res.status(200).json({ message: "Discount updated successfully" });
        } else {
            res.status(500).json({ message: "Failed to update brand" });
        }
    } catch (error) {
        console.log(error);
    }
}

const getDiscountList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await discountService.getDiscountList();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: "Failed to get brand list" });
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteDiscount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { brand_id } = req.body;
        const result = await discountService.deleteDiscount(brand_id);
        if (result) {
            res.status(200).json({ message: "Discount deleted successfully" });
        } else {
            res.status(500).json({ message: "Failed to delete brand" });
        }
    } catch (error) {
        console.log(error);
    }
}

const getValidDiscounts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await discountService.getValidDiscounts();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: "Failed to get brand list" });
        }
    } catch (error) {
        console.log(error);
    }
}

export { createDiscount, editDiscount, getDiscountList, deleteDiscount, getValidDiscounts };