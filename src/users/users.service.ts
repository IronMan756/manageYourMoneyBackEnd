import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "./users.dto";

@Injectable()
export class UsersService {
  public constructor(
    @InjectModel("User") private readonly userModel: Model<any>
  ) {}
  public async findUser(email: string): Promise<any> {
    return this.userModel
      .findOne({ email })
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
    console.log(user);
    const createUser = new this.userModel(user);
    return createUser.save();
  }
}
