import * as mongoose from 'mongoose';
export const userSchema: mongoose.Schema = new mongoose.Schema({
    accessToken:{
        type: String,
    },
    email:{
        type: String,
    },
    password: {
        type: String,
    },
    login:{
        type: String,
    }
})