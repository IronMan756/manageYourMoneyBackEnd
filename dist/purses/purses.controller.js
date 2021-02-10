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
const purses_service_1 = require("./purses.service");
const passport_1 = require("@nestjs/passport");
const purses_dto_1 = require("./purses.dto");
let PursesController = class PursesController {
    constructor(pursesService) {
        this.pursesService = pursesService;
    }
    async findPurses(quary, res) {
        try {
            const purse = await this.pursesService.find(quary);
            return res.status(common_1.HttpStatus.OK).json({
                data: purse,
                error: null,
            });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ data: null, error });
        }
    }
    async createPurses(purse, res) {
        try {
            const newPurse = await this.pursesService.createPurse(purse);
            return res.status(common_1.HttpStatus.OK).json({
                data: newPurse,
                error: null,
            });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ data: null, error });
        }
    }
    async deletePurses(purseId, res) {
        try {
            await this.pursesService.removePurse(purseId);
            return res.status(common_1.HttpStatus.OK).json({
                data: true,
                error: null,
            });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ data: null, error });
        }
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    common_1.Get(""),
    swagger_1.ApiOperation({ description: "Get purses" }),
    swagger_1.ApiResponse({
        description: "Find purses success",
        status: common_1.HttpStatus.OK,
    }),
    swagger_1.ApiResponse({
        description: "Any purses weren't found",
        status: common_1.HttpStatus.NOT_FOUND,
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    swagger_1.ApiQuery({
        name: "quary",
        required: false,
        description: "Find purse by some query",
    }),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PursesController.prototype, "findPurses", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    common_1.Post(""),
    swagger_1.ApiOperation({ description: "Create new a purse" }),
    swagger_1.ApiResponse({
        description: "Create new a purse success",
        status: common_1.HttpStatus.OK,
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purses_dto_1.PursesDto, Object]),
    __metadata("design:returntype", Promise)
], PursesController.prototype, "createPurses", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard("jwt")),
    common_1.Delete(""),
    swagger_1.ApiOperation({ description: "Delete the purse" }),
    swagger_1.ApiResponse({
        description: "Delete the purse success",
        status: common_1.HttpStatus.OK,
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    swagger_1.ApiQuery({ name: "id", required: true, description: "Purse id" }),
    __param(0, common_1.Query("id")),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PursesController.prototype, "deletePurses", null);
PursesController = __decorate([
    swagger_1.ApiTags("purses"),
    common_1.Controller("purses"),
    __metadata("design:paramtypes", [purses_service_1.PursesService])
], PursesController);
exports.PursesController = PursesController;
//# sourceMappingURL=purses.controller.js.map