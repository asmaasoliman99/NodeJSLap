import mongoose, { model, Schema } from "mongoose";

const noteSchema = new Schema({
    title :{
        type:String,
        required:true
    },
    content :{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps: true,
    versionKey:false
})

const noteModel = model("note", noteSchema)

export default noteModel;