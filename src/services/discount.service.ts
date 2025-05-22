import Discount from '../models/discount';
import { DiscountResponse } from '../response/discountResponse';

const discountService = {
 createDiscount: async (percent: number, expired_at: Date): Promise<boolean> => {
    try{
        const discount = new Discount({
            percent,
            expired_at,
        });
        await discount.save();
    return true;
    }catch(error){
        return false;
    }
},
 editDiscount: async (discount_id: string, percent: number, expired_at: Date): Promise<boolean> => {
    try{
        await Discount.findByIdAndUpdate(discount_id, {
            percent,
            expired_at,
        },{new: true});
        return true;
    }catch(error){
        return false;
    }
},
 getDiscountList: async (): Promise<DiscountResponse[]> => {
    try{
        const discounts = await Discount.find();
        return discounts.map((discount) => ({
            discount_id: discount._id.toString(),
            percent: discount.percent || 0,
            expired_at: discount.expired_at,
        }));
    }catch(error){
        return [];
    }
},
 deleteDiscount: async (discount_id: string): Promise<boolean> => {
    try{
        await Discount.findByIdAndDelete(discount_id);
        return true;
    }catch(error){
        return false;
    }
},
getValidDiscounts: async (): Promise<DiscountResponse[]> => {
    try {
        const now = new Date();
        const discounts = await Discount.find({ expired_at: { $gt: now } }); 
        return discounts.map((discount) => ({
            discount_id: discount._id.toString(),
            percent: discount.percent || 0,
            expired_at: discount.expired_at,
        }));
    } catch (error) {
        return [];
    }
},
}
export { discountService };