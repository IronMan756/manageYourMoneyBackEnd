import { PursesService } from "./purses.service";
import { Response } from "express";
import { PursesDto } from "./purses.dto";
export declare class PursesController {
    pursesService: PursesService;
    constructor(pursesService: PursesService);
    findPurses(quary: any, res: Response): Promise<Response<any>>;
    createPurses(purse: PursesDto, res: Response): Promise<Response<any>>;
    deletePurses(purseId: string, res: Response): Promise<Response<any>>;
}
