"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_controller_1 = require("./category.controller");
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("./category.schema");
const category_service_1 = require("./category.service");
const module_decorator_1 = require("@nestjs/common/decorators/modules/module.decorator");
let CategoriesModule = class CategoriesModule {
};
CategoriesModule = __decorate([
    module_decorator_1.Module({
        controllers: [category_controller_1.CategoriesController],
        exports: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Category',
                    schema: category_schema_1.categorySchema
                }])
        ],
        providers: [category_service_1.CategoriesService]
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=category.module.js.map