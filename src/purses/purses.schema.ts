import * as mongoose from "mongoose";
export const purseSchema: mongoose.Schema = new mongoose.Schema({
  userId: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  categoryId: {
    type: String,
    default: "",
  },
  balance: {
    type: Number,
    default: 0,
  },
  //   balance3: {
  //     type: String,
  //     //   default: 0,
  //   },
});
export type Purse = {
  userId: string;
  name: string;
  categoryId: string;
  balance: number;
  //   balance3: number;
};

export interface IPurse extends mongoose.Document, Purse {}
