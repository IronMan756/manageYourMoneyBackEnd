import { Model } from "mongoose";
import { UserDto } from "./users.dto";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<any>);
    findUser(email: string): Promise<any>;
    find(): Promise<any>;
    createUser(user: UserDto & {
        accessToken: string;
    }): Promise<UserDto>;
}
