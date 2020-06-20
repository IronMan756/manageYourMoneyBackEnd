import * as  mongoose  from 'mongoose'
export const categorySchema: mongoose.Schema = new mongoose.Schema({
    img:{
        type: String
    },
    name:{
        type: String
    },
    description:{
        type: String
    }
})