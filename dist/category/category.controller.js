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
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const category_service_1 = require("./category.service");
const category_dto_1 = require("./category.dto");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async findCategories(quary, res) {
        try {
            const incomes = await this.categoriesService.find(quary);
            return res.status(common_1.HttpStatus.OK).json({
                data: incomes,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async createCategory(category, res) {
        try {
            const newCategory = await this.categoriesService.createCategory(category);
            return res.status(common_1.HttpStatus.OK).json({
                data: newCategory,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async deleteCategory(categoryId, res) {
        try {
            console.log(categoryId);
            await this.categoriesService.removeCategory(categoryId);
            return res.status(common_1.HttpStatus.OK).json({
                data: true,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get(''),
    swagger_1.ApiOperation({ description: 'Find categories' }),
    swagger_1.ApiResponse({
        description: 'Find categories success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Any categories weren't found",
        status: common_1.HttpStatus.NOT_FOUND
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'quary', required: false, description: 'Find categoriy by some query' }),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findCategories", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(''),
    swagger_1.ApiOperation({ description: 'Create new category' }),
    swagger_1.ApiResponse({
        description: 'Create new category success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoriesDto, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createCategory", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(''),
    swagger_1.ApiOperation({ description: 'Delete the category' }),
    swagger_1.ApiResponse({
        description: 'Delete the category success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'id', required: true, description: 'Category id' }),
    __param(0, common_1.Query('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
CategoriesController = __decorate([
    swagger_1.ApiTags('categories'),
    common_1.Controller('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=category.controller.js.map