import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "./users.dto";
<<<<<<< HEAD

@Injectable()
export class UsersService {
  public constructor(
    @InjectModel("User") private readonly userModel: Model<any>
  ) {}
  public async findUser(email: string): Promise<any> {
    return this.userModel
      .findOne({ email }, { __v: 0 })
      .lean()
      .exec();
  }
  public async find(): Promise<any> {
    return this.userModel
      .find({})
      .lean()
      .exec();
  }
  public async createUser(
    user: UserDto & { accessToken: string }
  ): Promise<UserDto> {
    const createUser = new this.userModel(user);
    return createUser.save();
  }
}
=======
 
@Injectable()
export class UsersService{
    public constructor(
        @InjectModel('User') private readonly userModel: Model<any>
    ){}
    public async findUser(query: any): Promise<any>{
        return this.userModel
            .findOne(query)
            .lean()
            .exec();

    }
    public async find(query: any): Promise<any>{
        return this.userModel
            .find({})
            .lean()
            .exec();

    }
    public async createUser (
        user: UserDto & { accessToken: string}
    ):Promise<UserDto>{
        const createUser = new this.userModel(user);
        return createUser.save();
    }
}
>>>>>>> parent of 7d299ea... Feat/expence (#33)
