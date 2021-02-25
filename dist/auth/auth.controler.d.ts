import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";
import { UserDto } from "./../users/users.dto";
import { Response } from "express";
import { UsersService } from "src/users/users.service";
export declare class AuthController {
    userService: UsersService;
    configService: ConfigService;
    authService: AuthService;
    constructor(userService: UsersService, configService: ConfigService, authService: AuthService);
    signin(query: UserDto, res: Response): Promise<Response<any>>;
    signUp(user: UserDto, res: Response): Promise<Response>;
}
