import express from "express";
import { createNote, deleteNote, getAllNotes, getMyPost } from "./notes.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { get } from "mongoose";

const noteRoutes = express.Router()

noteRoutes.use(verifyToken)

noteRoutes.get("/notes", getAllNotes)
noteRoutes.get("/Mynotes", getMyPost)
noteRoutes.post("/notes", createNote)
noteRoutes.delete("/notes/:id",deleteNote)

export default noteRoutes;