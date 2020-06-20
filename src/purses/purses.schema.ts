import * as mongoose from 'mongoose';

export const purseSchema: mongoose.Schema = new mongoose.Schema({
    idUser:{
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
    },
    // _id:
})