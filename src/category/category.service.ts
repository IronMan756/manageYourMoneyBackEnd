import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { CategoriesDto } from "./category.dto";

@Injectable()
export class CategoriesService {
    public constructor(
        @InjectModel('Category') private readonly _categoryModel: Model<any>
    ) { }
    public async find(quary: any) {
        return this._categoryModel.find(quary).lean().exec();
    }
    public async createCategory(
        category: CategoriesDto
    ) {
        const createCategory = new this._categoryModel(category);
        return createCategory.save();
    }
    public async removeCategory(categoryId: string) {
        return this._categoryModel.remove({ _id: categoryId });;
    }
}