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
const incomes_dto_1 = require("../incomes/incomes.dto");
const expences_service_1 = require("./expences.service");
const expences_dto_1 = require("./expences.dto");
let ExpencesController = class ExpencesController {
    constructor(expencesService) {
        this.expencesService = expencesService;
    }
    async findExpences(quary, res) {
        try {
            const expences = await this.expencesService.find(quary);
            return res.status(common_1.HttpStatus.OK).json({
                data: expences,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async createExpences(expence, res) {
        try {
            const newExpence = await this.expencesService.createExpence(expence);
            return res.status(common_1.HttpStatus.OK).json({
                data: newExpence,
                error: null,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ data: null, error });
        }
    }
    async deleteExpence(expenceId, res) {
        try {
            await this.expencesService.removeExpence(expenceId);
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
    swagger_1.ApiOperation({ description: 'Find expences' }),
    swagger_1.ApiResponse({
        description: 'Find expences success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Any expences weren't found",
        status: common_1.HttpStatus.NOT_FOUND
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'quary', required: false, description: 'Find expence by some query' }),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExpencesController.prototype, "findExpences", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post(''),
    swagger_1.ApiOperation({ description: 'Create new expence' }),
    swagger_1.ApiResponse({
        description: 'Create new expence success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expences_dto_1.ExpencesDto, Object]),
    __metadata("design:returntype", Promise)
], ExpencesController.prototype, "createExpences", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete(''),
    swagger_1.ApiOperation({ description: 'Delete the expence' }),
    swagger_1.ApiResponse({
        description: 'Delete the expence success',
        status: common_1.HttpStatus.OK
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
    }),
    swagger_1.ApiQuery({ name: 'id', required: true, description: 'Expence id' }),
    __param(0, common_1.Query('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExpencesController.prototype, "deleteExpence", null);
ExpencesController = __decorate([
    swagger_1.ApiTags('expences'),
    common_1.Controller('expences'),
    __metadata("design:paramtypes", [expences_service_1.ExpencesService])
], ExpencesController);
exports.ExpencesController = ExpencesController;
//# sourceMappingURL=expences.controller.js.map