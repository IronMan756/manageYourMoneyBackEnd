import { Model } from 'mongoose';
import { IncomesDto } from "./incomes.dto";
export declare class IncomesService {
    private readonly _incomeModel;
    constructor(_incomeModel: Model<any>);
    find(quary: any): Promise<Pick<any, string | number | symbol>[]>;
    createIncome(income: IncomesDto): Promise<any>;
    removeIncome(incomeId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
