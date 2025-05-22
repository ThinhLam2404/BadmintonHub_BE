import Voucher from '../models/voucher';
import { VoucherResponse } from '../response/voucherResponse';

const voucherService = {
 createVoucher: async (percent: number, expired_at: Date): Promise<boolean> => {
    try{
        const voucher = new Voucher({
            percent,
            expired_at,
        });
        await voucher.save();
    return true;
    }catch(error){
        return false;
    }
},
 editVoucher: async (voucher_id: string, percent: number, expired_at: Date): Promise<boolean> => {
    try{
        await Voucher.findByIdAndUpdate(voucher_id, {
            percent,
            expired_at,
        },{new: true});
        return true;
    }catch(error){
        return false;
    }
},
 getVoucherList: async (): Promise<VoucherResponse[]> => {
    try{
        const vouchers = await Voucher.find();
        return vouchers.map((voucher) => ({
            voucher_id: voucher._id.toString(),
            percent: voucher.percent || 0,
            expired_at: voucher.expired_at,
        }));
    }catch(error){
        return [];
    }
},
 deleteVoucher: async (voucher_id: string): Promise<boolean> => {
    try{
        await Voucher.findByIdAndDelete(voucher_id);
        return true;
    }catch(error){
        return false;
    }
},
getValidVouchers: async (): Promise<VoucherResponse[]> => {
    try {
        const now = new Date();
        const vouchers = await Voucher.find({ expired_at: { $gt: now } }); 
        return vouchers.map((voucher) => ({
            voucher_id: voucher._id.toString(),
            percent: voucher.percent || 0,
            expired_at: voucher.expired_at,
        }));
    } catch (error) {
        return [];
    }
},
}
export { voucherService };