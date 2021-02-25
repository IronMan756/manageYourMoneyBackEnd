import { Model } from 'mongoose';
import { CategoriesDto } from "./category.dto";
export declare class CategoriesService {
    private readonly _categoryModel;
    constructor(_categoryModel: Model<any>);
    find(quary: any): Promise<Pick<any, string | number | symbol>[]>;
    createCategory(category: CategoriesDto): Promise<any>;
    removeCategory(categoryId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
