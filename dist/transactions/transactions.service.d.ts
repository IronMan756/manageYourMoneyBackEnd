import { TransactionsDto } from "./transactions.dto";
import { Model } from 'mongoose';
export declare class TransactionsService {
    private readonly _transactionModel;
    constructor(_transactionModel: Model<any>);
    find(quary: any): Promise<Pick<any, string | number | symbol>[]>;
    createTransaction(transaction: TransactionsDto): Promise<any>;
    removeTransaction(transactionId: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
