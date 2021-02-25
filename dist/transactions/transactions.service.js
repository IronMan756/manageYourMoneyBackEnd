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
let TransactionsService = class TransactionsService {
    constructor(_transactionModel) {
        this._transactionModel = _transactionModel;
    }
    async find(quary) {
        return this._transactionModel.find(quary).lean().exec();
    }
    async createTransaction(transaction) {
        const createTransaction = new this._transactionModel(transaction);
        return createTransaction.save();
    }
    async removeTransaction(transactionId) {
        return this._transactionModel.remove({ _id: transactionId });
        ;
    }
};
TransactionsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Transaction')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map