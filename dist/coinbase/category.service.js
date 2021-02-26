"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CategoriesService = class CategoriesService {
    constructor(_categoryModel) {
        this._categoryModel = _categoryModel;
    }
    async find(quary) {
        return this._categoryModel.find(quary).lean().exec();
    }
    async createCategory(category) {
        const createCategory = new this._categoryModel(category);
        return createCategory.save();
    }
    async removeCategory(categoryId) {
        return this._categoryModel.remove({ _id: categoryId });
        ;
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=category.service.js.map