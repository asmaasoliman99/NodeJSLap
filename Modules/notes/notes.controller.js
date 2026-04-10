import noteModel from "../../DataBase/Models/noteModel.js"
import jwt, { decode } from "jsonwebtoken"

const getAllNotes = async (req,res) => {
    let notes = await noteModel.find().select("title").populate("createdBy");
    res.json({message :"list notes", data:notes})
}

const getMyPost = async (req, res) => {
    let mynotes = await noteModel.find({createdBy: req.decoded._id})
    res.json({message:"my posts", data: mynotes})
}

const createNote = async(req, res) =>{
            req.body.createdBy = req.decoded._id
            let createdNote = await noteModel.insertMany (req.body) 
            res.status (201).json({message:"created Post"})
} 

const deleteNote = async(req, res) =>{
    // let userID = req.user._id
    let deleteNote = await noteModel.findOneAndDelete({_id: req.params.id, createdBy: req.decoded._id})
    if (deleteNote == null) {
        return res.status(404).json({message:"You can't delete this post"})
    }
    res.json({message:"post deleted"})
}


export {getAllNotes, createNote, deleteNote, getMyPost}