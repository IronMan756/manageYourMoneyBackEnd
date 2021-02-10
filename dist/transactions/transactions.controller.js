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
const transactions_service_1 = require("./transactions.service");
const transactions_dto_1 = require("./transactions.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async findTransactions(quary, res) {
        try {
            const transactions = await this.transactionsService.find(quary);
            return res.status(common_1.HttpStatus.OK).json({
                data: transactions,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async createTransaction(transaction, res) {
        try {
            const newTransaction = await this.transactionsService.createTransaction(transaction);
            return res.status(common_1.HttpStatus.OK).json({
                data: newTransaction,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async deleteTransaction(transactionId, res) {
        try {
            await this.transactionsService.removeTransaction(transactionId);
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
    swagger_1.ApiOperation({ description: 'Find transactions' }),
    swagger_1.ApiResponse({
        description: 'Find transactions success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Any transactions weren't found",
        status: common_1.HttpStatus.NOT_FOUND
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'quary', required: false, description: 'Find transaction by some query' }),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findTransactions", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(''),
    swagger_1.ApiOperation({ description: 'Create new transaction' }),
    swagger_1.ApiResponse({
        description: 'Create new transaction success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transactions_dto_1.TransactionsDto, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "createTransaction", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(''),
    swagger_1.ApiOperation({ description: 'Delete the transaction' }),
    swagger_1.ApiResponse({
        description: 'Delete the transaction success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'id', required: true, description: 'Transactionid' }),
    __param(0, common_1.Query('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "deleteTransaction", null);
TransactionsController = __decorate([
    swagger_1.ApiTags('transactions'),
    common_1.Controller('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map