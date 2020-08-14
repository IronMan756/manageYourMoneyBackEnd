import * as mongoose from 'mongoose';


export const transactionSchema: mongoose.Schema = new mongoose.Schema({
    purseIdTo: {
        type: String
    },
    purseIdFrom: {
        type: String
    },
    incomeId: {
        type: String
    },
    categoryId: {
        type: String
    },
    expenceId: {
        type: String
    },
    suma: {
        type: Number
    },
    data:{
        type: Date
    },
    name:{
        type: String
    },
    description:{
        type: String
    }
})  