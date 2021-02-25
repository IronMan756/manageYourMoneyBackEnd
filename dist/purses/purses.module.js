"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const purses_controller_1 = require("./purses.controller");
const purses_schema_1 = require("./purses.schema");
const mongoose_1 = require("@nestjs/mongoose");
const purses_service_1 = require("./purses.service");
const transactions_schema_1 = require("../transactions/transactions.schema");
let PursesModule = class PursesModule {
};
PursesModule = __decorate([
    common_1.Module({
        controllers: [purses_controller_1.PursesController],
        exports: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: "Purse",
                    schema: purses_schema_1.purseSchema,
                },
                {
                    name: "Expence",
                    schema: transactions_schema_1.transactionSchema,
                },
            ]),
        ],
        providers: [purses_service_1.PursesService],
    })
], PursesModule);
exports.PursesModule = PursesModule;
//# sourceMappingURL=purses.module.js.map