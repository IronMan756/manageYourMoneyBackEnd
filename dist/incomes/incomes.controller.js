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
const incomes_service_1 = require("./incomes.service");
const passport_1 = require("@nestjs/passport");
const incomes_dto_1 = require("./incomes.dto");
let IncomesController = class IncomesController {
    constructor(incomesService) {
        this.incomesService = incomesService;
    }
    async findIncomes(quary, res) {
        try {
            const incomes = await this.incomesService.find(quary);
            return res.status(common_1.HttpStatus.OK).json({
                data: incomes,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async createPurses(income, res) {
        try {
            const newIncome = await this.incomesService.createIncome(income);
            return res.status(common_1.HttpStatus.OK).json({
                data: newIncome,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async deletePurses(incomeId, res) {
        try {
            await this.incomesService.removeIncome(incomeId);
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
    swagger_1.ApiOperation({ description: 'Find incomes' }),
    swagger_1.ApiResponse({
        description: 'Find incomes success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Any incomes weren't found",
        status: common_1.HttpStatus.NOT_FOUND
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'quary', required: false, description: 'Find income by some query' }),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "findIncomes", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(''),
    swagger_1.ApiOperation({ description: 'Create new income' }),
    swagger_1.ApiResponse({
        description: 'Create new income success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [incomes_dto_1.IncomesDto, Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "createPurses", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(''),
    swagger_1.ApiOperation({ description: 'Delete the income' }),
    swagger_1.ApiResponse({
        description: 'Delete the income success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'id', required: true, description: 'Income id' }),
    __param(0, common_1.Query('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "deletePurses", null);
IncomesController = __decorate([
    swagger_1.ApiTags('incomes'),
    common_1.Controller('incomes'),
    __metadata("design:paramtypes", [incomes_service_1.IncomesService])
], IncomesController);
exports.IncomesController = IncomesController;
//# sourceMappingURL=incomes.controller.js.map