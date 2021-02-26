import { IncomesService } from "./incomes.service";
import { Response } from "express";
import { IncomesDto } from "./incomes.dto";
export declare class IncomesController {
    incomesService: IncomesService;
    constructor(incomesService: IncomesService);
    findIncomes(quary: any, res: Response): Promise<Response<any>>;
    createPurses(income: IncomesDto, res: Response): Promise<Response<any>>;
    deletePurses(incomeId: string, res: Response): Promise<Response<any>>;
}
