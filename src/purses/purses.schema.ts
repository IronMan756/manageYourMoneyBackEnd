import * as mongoose from 'mongoose';
export const purseSchema: mongoose.Schema = new mongoose.Schema({
    userId:{
        type: String
    },
    name:{
        type: String
    },
    categoryId:{
        type: String
    },
    balance:{
        type: Number
    }
})