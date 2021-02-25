import * as mongoose from "mongoose";
export declare const purseSchema: mongoose.Schema;
export declare type Purse = {
    userId: string;
    name: string;
    categoryId: string;
    balance: number;
};
export interface IPurse extends mongoose.Document, Purse {
}
