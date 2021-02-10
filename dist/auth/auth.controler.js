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
const auth_service_1 = require("./auth.service");
const config_1 = require("@nestjs/config");
const users_dto_1 = require("./../users/users.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
let AuthController = class AuthController {
    constructor(userService, configService, authService) {
        this.userService = userService;
        this.configService = configService;
        this.authService = authService;
    }
    async signin(query, res) {
        try {
            const user = await this.userService.findUser(query.email);
            console.log(user);
            if (!user ||
                (user && !(await bcrypt.compare(query.password, user.password)))) {
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                    data: null,
                    error: "Invalid email and/or password",
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                token: user.accessToken,
                error: null,
            });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ data: null, error });
        }
    }
    async signUp(user, res) {
        try {
            const { email, password, login } = user;
            const userInDB = await this.userService.findUser(email);
            if (userInDB) {
                return res.status(common_1.HttpStatus.CONFLICT).json({
                    data: null,
                    error: "This email already exists",
                });
            }
            const numberTypeSalt = Number(this.configService.get("SALT"));
            const accessToken = await this.authService.createJwt(login, password, email);
            await this.userService.createUser(Object.assign(Object.assign({}, user), { accessToken, password: password }));
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
    common_1.Post("sign-in"),
    swagger_1.ApiOperation({ description: "Login to system" }),
    swagger_1.ApiResponse({
        description: "Log in success ",
        status: common_1.HttpStatus.OK,
    }),
    swagger_1.ApiResponse({
        description: "Wrong credentials",
        status: common_1.HttpStatus.UNAUTHORIZED,
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    common_1.Post("sign-up"),
    swagger_1.ApiOperation({ description: "Sign up" }),
    swagger_1.ApiResponse({
        description: "Sign up success",
        status: common_1.HttpStatus.OK,
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
AuthController = __decorate([
    swagger_1.ApiTags("Auth"),
    common_1.Controller("auth"),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controler.js.map