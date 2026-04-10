// route === link 

import express from "express";
import { getAllUsers , createUser , UpdateUser, deleteUser, register, login, VerfiyAcount} from "./user.controller.js";
import CheckEmail from "../../middleware/CheckEmail.js";
import HashPassword from "../../middleware/HashPassword.js";
import {Validation} from "../../middleware/validation.js";

// import { register } from "node:module";
    
const userRoutes = express.Router()

  userRoutes.get ("/users", getAllUsers)
  userRoutes.post("/users", createUser)
  userRoutes.put("/users/:id",UpdateUser)
  userRoutes.delete("/users/:id", deleteUser)
  userRoutes.get("/verify/:email", VerfiyAcount)
 //create -- register -- post 

  userRoutes.post("/register",Validation, CheckEmail, HashPassword, register)
  userRoutes.post("/login", CheckEmail, login)
  export default userRoutes;

//create -- login
