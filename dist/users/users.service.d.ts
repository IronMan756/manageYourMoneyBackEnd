import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<any>);
    findUser(query: string): Promise<any>;
    find(query: any): Promise<any>;
}
