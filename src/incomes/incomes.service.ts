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
        const { userId, purseId, suma, data, name, _id } = quary
        console.log( 'userId',userId, 'purseId',purseId, 'suma',suma, 'data',data, 'name',name, "_id",_id)

        return this._incomeModel.find({}).lean().exec();
    }
    public async createIncome(
        income: IncomesDto
    ) {
        console.log(income)
        const createIncome = new this._incomeModel(income);
        return createIncome.save();
    }
    public async removeIncome(incomeId: string) {
        return this._incomeModel.remove({ _id: incomeId });;
    }
}