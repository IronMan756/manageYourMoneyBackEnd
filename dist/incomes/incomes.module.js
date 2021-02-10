"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const incomes_controller_1 = require("./incomes.controller");
const mongoose_1 = require("@nestjs/mongoose");
const incomes_schema_1 = require("./incomes.schema");
const incomes_service_1 = require("./incomes.service");
let IncomesModule = class IncomesModule {
};
IncomesModule = __decorate([
    common_1.Module({
        controllers: [incomes_controller_1.IncomesController],
        exports: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Income',
                    schema: incomes_schema_1.incomeSchema
                }])
        ],
        providers: [incomes_service_1.IncomesService]
    })
], IncomesModule);
exports.IncomesModule = IncomesModule;
//# sourceMappingURL=incomes.module.js.map