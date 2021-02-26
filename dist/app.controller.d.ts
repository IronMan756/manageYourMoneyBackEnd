import { Response } from "express";
export declare class AppController {
    constructor();
    findUser(res: Response): Promise<Response<any>>;
}
