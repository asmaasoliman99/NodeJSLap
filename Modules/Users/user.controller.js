import { Usermodel } from "../../DataBase/Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../../Email/email.js";
import { HandleError } from "../../middleware/HndleError.js";

const getAllUsers = async (req, res) => {
    let users = await Usermodel.find ()
    res.json({message : " user list ", data : users})
}

const createUser = async (req, res) => {
    let addedUser = await Usermodel.insertMany(req.body)
    res.status(201).json({message : "create user" , data : addedUser})
}

const UpdateUser = async(req, res) => {
    let updateUser = await Usermodel.findByIdAndUpdate(req.params.id,req.body
        ,{new : true})

        if (updateUser == null) {
            return res.status(404).json({message : "user not found"})
        }

    res.json({message : "updated user", data : updateUser})
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
    let deletedUser = await Usermodel.findByIdAndDelete(id)
    if(deletedUser == null){
        return res.status(404).json({message: "user not found"})
    }
    res.json({message : "deleted user", data : deletedUser})
}


const register = HandleError ( async (req, res) => {
    const registerdUser = await Usermodel.insertMany(req.body)
    sendEmail(req.body.email)
    
    registerdUser[0].password = undefined;
    res.status(201).json({message: "Registered User", data: registerdUser})
})

const login = HandleError( async (req, res) => {
    const checkPassword = await bcrypt.compareSync(
        String(req.body.password),  
        String(req.user.password)    
    );
    if (! checkPassword) {
        res.status(422).json({ message: "invalid Data" });
    }
    if (req.user.isConfirmed==false) {
        return res.status(400).json({message: "Account Not Verified"});
    }
    let token = jwt.sign({_id: req.user._id, email: req.user.email, role: req.user.role},"lily")
    res.status(200).json({ message: "login user", data: req.user, token:token });
});


const VerfiyAcount = (req,res) => {
    jwt.verify(req.params.email,"emailyy", async(err,decoded)=>{
        if(err) {
            return res.status(400).json({message: "invalid token"});
        }
        await Usermodel.findOneAndUpdate ({email: decoded},{isConfirmed:true})
        res.send("account verified");
})
}

export {getAllUsers , createUser , UpdateUser , deleteUser, register, login, VerfiyAcount}
