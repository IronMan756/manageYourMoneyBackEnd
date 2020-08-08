import * as mongoose from "mongoose";
export const incomeSchema: mongoose.Schema = new mongoose.Schema({
  userId: {
    type: String,
  },
  purseId: {
    type: String,
  },
  suma: {
    type: Number,
  },
  data: {
    type: Date,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});
