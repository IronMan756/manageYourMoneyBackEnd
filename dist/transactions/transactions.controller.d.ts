import { TransactionsService } from "./transactions.service";
import { TransactionsDto } from "./transactions.dto";
import { Response } from "express";
export declare class TransactionsController {
    transactionsService: TransactionsService;
    constructor(transactionsService: TransactionsService);
    findTransactions(quary: any, res: Response): Promise<Response<any>>;
    createTransaction(transaction: TransactionsDto, res: Response): Promise<Response<any>>;
    deleteTransaction(transactionId: string, res: Response): Promise<Response<any>>;
}
