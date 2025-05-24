import Brand from '../models/brand';
import { BrandResponse } from '../responses/brand.response';

const brandService = {
 createBrand: async (name: string, description: string): Promise<boolean> => {
    try{
        const brand = new Brand({
            name,
            description,
        });
        await brand.save();
    return true;
    }catch(error){
        return false;
    }
},
 editBrand: async (brand_id: string, name: string, description: string): Promise<boolean> => {
    try{
        await Brand.findByIdAndUpdate(brand_id, {
            name,
            description,
        },{new: true});
        return true;
    }catch(error){
        return false;
    }
},
 getBrandList: async (): Promise<BrandResponse[]> => {
    try{
        const brands = await Brand.find();
        return brands.map((brand) => ({
            brand_id: brand._id.toString(),
            name: brand.name,
            description: brand.description,
        }));
    }catch(error){
        return [];
    }
},
 deleteBrand: async (brand_id: string): Promise<boolean> => {
    try{
        await Brand.findByIdAndDelete(brand_id);
        return true;
    }catch(error){
        return false;
    }
},
}
export { brandService };