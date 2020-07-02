import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { ExpencesDto } from "./expences.dto";

@Injectable()
export class ExpencesService {
    public constructor(
        @InjectModel('Expence') private readonly _expenceModel: Model<any>
    ) { }
    public async find(quary: any) {
        return this._expenceModel.find(quary).lean().exec();
    }
    public async createExpence(
        expence: ExpencesDto
    ) {
        const createExpence = new this._expenceModel(expence);
        return createExpence.save();
    }
    public async removeExpence(expenceId: string) {
        
        return this._expenceModel.remove({ _id: expenceId });;
    }
}