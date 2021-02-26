import { UsersService } from "./users.service";
import { Response } from "express";
export declare class UsersController {
    private readonly _userServise;
    constructor(_userServise: UsersService);
    findUser(quary: any, res: Response): Promise<Response<any>>;
}
