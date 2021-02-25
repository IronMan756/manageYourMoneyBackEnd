import { IPurse } from "./purses.schema";
import { Model } from "mongoose";
import { PursesDto } from "./purses.dto";
export declare class PursesService {
    private readonly _purseModel;
    private readonly _expenceModel;
    constructor(_purseModel: Model<IPurse>, _expenceModel: Model<any>);
    find(quary: any): Promise<Pick<IPurse, "_id" | "name" | "userId" | "categoryId" | "balance">[]>;
    createPurse(purse: PursesDto): Promise<IPurse>;
    removePurse(purseId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    migrate(collName: string): Promise<any>;
}
