"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const expences_controller_1 = require("./expences.controller");
const mongoose_1 = require("@nestjs/mongoose");
const transactions_schema_1 = require("../transactions/transactions.schema");
const expences_service_1 = require("./expences.service");
const module_decorator_1 = require("@nestjs/common/decorators/modules/module.decorator");
let ExpencesModule = class ExpencesModule {
};
ExpencesModule = __decorate([
    module_decorator_1.Module({
        controllers: [expences_controller_1.ExpencesController],
        exports: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Expence',
                    schema: transactions_schema_1.transactionSchema
                }])
        ],
        providers: [expences_service_1.ExpencesService]
    })
], ExpencesModule);
exports.ExpencesModule = ExpencesModule;
//# sourceMappingURL=expences.module.js.map