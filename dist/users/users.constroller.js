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
const users_service_1 = require("./users.service");
const bcrypt = require("bcrypt");
let UsersController = class UsersController {
    constructor(_userServise) {
        this._userServise = _userServise;
    }
    async findUser(quary, res) {
        try {
            const { email, pass } = quary;
            let user = await this._userServise.findUser(email);
            if (!user || (user && !(await bcrypt.compare(pass, user.password)))) {
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                    data: null,
                    error: "Invalid email and/or password",
                });
            }
            user = Object.assign(Object.assign({}, user), { id: user._id });
            delete user.password;
            delete user._id;
            return res.status(common_1.HttpStatus.OK).json({
                data: user,
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
    common_1.Get(""),
    swagger_1.ApiOperation({ description: "Find user" }),
    swagger_1.ApiResponse({
        description: "Find user success",
        status: common_1.HttpStatus.OK,
    }),
    swagger_1.ApiResponse({
        description: "Any user weren't found",
        status: common_1.HttpStatus.NOT_FOUND,
    }),
    swagger_1.ApiResponse({
        description: "Server error",
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    }),
    swagger_1.ApiQuery({
        name: "quary",
        required: false,
        description: "Find user by some query",
    }),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUser", null);
UsersController = __decorate([
    swagger_1.ApiTags("user"),
    common_1.Controller("user"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.constroller.js.map