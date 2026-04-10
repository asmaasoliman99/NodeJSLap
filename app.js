import express from 'express';
import {connection} from "./DataBase/DB_Connection.js";
import userRoutes from './Modules/Users/user.routes.js';
import noteRoutes from './Modules/notes/notes.routes.js';
import sendEmail from './Email/email.js';

const app = express();
app.use(express.json());

await connection;
app.use(userRoutes);
app.use(noteRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
}) 