import { Response } from 'express';
import { CategoriesService } from "./category.service";
import { CategoriesDto } from "./category.dto";
export declare class CategoriesController {
    categoriesService: CategoriesService;
    constructor(categoriesService: CategoriesService);
    findCategories(quary: any, res: Response): Promise<Response<any>>;
    createCategory(category: CategoriesDto, res: Response): Promise<Response<any>>;
    deleteCategory(categoryId: string, res: Response): Promise<Response<any>>;
}
