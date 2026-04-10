
import { Usermodel } from "../DataBase/Models/User.js";

const CheckEmail = async (req, res, next) => {
    let foundedUser = await Usermodel.findOne({email: req.body.email})

    if (req.url== "/register") {
        if(foundedUser){
        return res.status(400).json({message: "email already exists"})
        }
        next()

    } else {
        if(foundedUser){
            req.user = foundedUser
            next()
        } else {
            res.json("invalid Data")
        }
    }
}

export default CheckEmail