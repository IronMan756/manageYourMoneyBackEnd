import * as mongoose from "mongoose";
export const expenceSchema: mongoose.Schema = new mongoose.Schema({
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
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});
