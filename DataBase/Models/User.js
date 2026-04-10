import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required :true,
        minLength :3,
        maxLength : 20
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        min: 18,
        max : 80
    },
    isConfirmed: {
        type:Boolean,
        default:false
    },
    role:{
        type: String,
        enum: ["user","admin"],
        default:"user"
    }
}, {
    timestamps:true,
    versionKey:false
})


export const Usermodel = mongoose.model("User", userSchema);


