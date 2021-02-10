import { Model } from 'mongoose';
import { ExpencesDto } from "./expences.dto";
export declare class ExpencesService {
    private readonly _expenceModel;
    constructor(_expenceModel: Model<any>);
    find(quary: any): Promise<Pick<any, string | number | symbol>[]>;
    createExpence(expence: ExpencesDto): Promise<any>;
    removeExpence(expenceId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
