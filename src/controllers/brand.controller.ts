import { Request, Response, NextFunction } from "express";
import { brandService } from "../services/brand.service";

const createBrand = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description } = req.body;
        const result = await brandService.createBrand(name, description);
        if (result) {
            res.status(200).json({ message: "Brand created successfully" });
        } else {
            res.status(500).json({ message: "Failed to create brand" });
        }
    } catch (error) {
        console.log(error);
    }
};

const editBrand = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { brand_id, name, description } = req.body;
        const result = await brandService.editBrand(brand_id, name, description);
        if (result) {
            res.status(200).json({ message: "Brand updated successfully" });
        } else {
            res.status(500).json({ message: "Failed to update brand" });
        }
    } catch (error) {
        console.log(error);
    }
}

const getBrandList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await brandService.getBrandList();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: "Failed to get brand list" });
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteBrand = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { brand_id } = req.body;
        const result = await brandService.deleteBrand(brand_id);
        if (result) {
            res.status(200).json({ message: "Brand deleted successfully" });
        } else {
            res.status(500).json({ message: "Failed to delete brand" });
        }
    } catch (error) {
        console.log(error);
    }
}
export { createBrand, editBrand, getBrandList, deleteBrand };