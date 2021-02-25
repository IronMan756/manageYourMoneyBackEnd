"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const module_decorator_1 = require("@nestjs/common/decorators/modules/module.decorator");
const transactions_controller_1 = require("./transactions.controller");
const transactions_schema_1 = require("./transactions.schema");
const transactions_service_1 = require("./transactions.service");
let TransactionsModule = class TransactionsModule {
};
TransactionsModule = __decorate([
    module_decorator_1.Module({
        controllers: [transactions_controller_1.TransactionsController],
        exports: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Transaction',
                    schema: transactions_schema_1.transactionSchema
                }])
        ],
        providers: [transactions_service_1.TransactionsService]
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map