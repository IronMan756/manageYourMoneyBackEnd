import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { IncomesDto } from "./incomes.dto";
 
@Injectable()
export class IncomesService {
    public constructor(
        @InjectModel('Income') private readonly _incomeModel: Model<any>
    ) { }
    public async find(quary: any) {
        return this._incomeModel.find(quary).lean().exec();
    }
    public async createIncome(
        income: IncomesDto
    ) {
        const createIncome = new this._incomeModel(income);
        return createIncome.save();
    }
    public async removeIncome(incomeId: string) {
        return this._incomeModel.remove({ _id: incomeId });;
    }
}