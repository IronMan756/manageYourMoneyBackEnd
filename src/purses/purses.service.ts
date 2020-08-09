import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PursesDto } from "./purses.dto";

@Injectable()
export class PursesService {
  public constructor(
    @InjectModel("Purse") private readonly _purseModel: Model<any>
  ) {}
  public async find(quary: any) {
    return this._purseModel
      .find(quary)
      .lean()
      .exec();
  }
  public async createPurse(purse: PursesDto) {
    const createPurse = new this._purseModel(purse);
    return createPurse.save();
  }
  public async removePurse(purseId: string) {
    return this._purseModel.remove({ _id: purseId });
  }
}
