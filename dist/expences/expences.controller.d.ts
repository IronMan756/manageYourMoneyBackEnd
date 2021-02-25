import { ExpencesService } from "./expences.service";
import { Response } from "express";
import { ExpencesDto } from "./expences.dto";
export declare class ExpencesController {
    expencesService: ExpencesService;
    constructor(expencesService: ExpencesService);
    findExpences(quary: any, res: Response): Promise<Response<any>>;
    createExpences(expence: ExpencesDto, res: Response): Promise<Response<any>>;
    deleteExpence(expenceId: string, res: Response): Promise<Response<any>>;
}
