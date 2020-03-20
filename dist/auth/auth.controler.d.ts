import { Response } from "express";
export declare class AuthController {
    constructor();
    signin(query: any, res: Response): Promise<Response<any>>;
    signUp(user: any, res: Response): Promise<Response>;
}
