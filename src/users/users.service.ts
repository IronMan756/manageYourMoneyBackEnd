import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
 
@Injectable()
export class UsersService{
    public constructor(
        @InjectModel('User') private readonly userModel: Model<any>
    ){}
    public async findUser(query: string): Promise<any>{
        return this.userModel
            .findOne({query})
            .lean()
            .exec();

    }
    public async find(query: any): Promise<any>{
        return this.userModel
            .find({})
            .lean()
            .exec();

    }
}