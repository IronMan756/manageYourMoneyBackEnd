import { TransactionsDto } from "./transactions.dto";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'

@Injectable()
export class TransactionsService {
    public constructor(
        @InjectModel('Transaction') private readonly _transactionModel: Model<any>
    ) { }
    public async find(quary: any) {
        return this._transactionModel.find(quary).lean().exec();
    }
    public async createTransaction(
        transaction: TransactionsDto
    ) {
        const createTransaction = new this._transactionModel(transaction);
        return createTransaction.save();
    }
    public async removeTransaction(transactionId: string) {
        return this._transactionModel.remove({ _id: transactionId });;
    }
}