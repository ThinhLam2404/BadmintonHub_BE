import { Request, Response, NextFunction } from "express";
import { voucherService } from "../services/voucher.service";

const createVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { percent, expired_at } = req.body;
        const result = await voucherService.createVoucher(percent, expired_at);
        if (result) {
            res.status(200).json({ message: "Voucher created successfully" });
        } else {
            res.status(500).json({ message: "Failed to create brand" });
        }
    } catch (error) {
        console.log(error);
    }
};

const editVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { voucher_id, percent, expired_at } = req.body;
        const result = await voucherService.editVoucher(voucher_id, percent, expired_at);
        if (result) {
            res.status(200).json({ message: "Voucher updated successfully" });
        } else {
            res.status(500).json({ message: "Failed to update brand" });
        }
    } catch (error) {
        console.log(error);
    }
}

const getVoucherList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await voucherService.getVoucherList();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: "Failed to get brand list" });
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { brand_id } = req.body;
        const result = await voucherService.deleteVoucher(brand_id);
        if (result) {
            res.status(200).json({ message: "Voucher deleted successfully" });
        } else {
            res.status(500).json({ message: "Failed to delete brand" });
        }
    } catch (error) {
        console.log(error);
    }
}

const getValidVouchers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await voucherService.getValidVouchers();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: "Failed to get brand list" });
        }
    } catch (error) {
        console.log(error);
    }
}

export { createVoucher, editVoucher, getVoucherList, deleteVoucher, getValidVouchers };