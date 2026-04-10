import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { template } from "./emailTemplate.js";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
export default  async function sendEmail(email) {
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "asmaasoliman191999@gmail.com",
        pass: "iuhr cqsj tmkp bckg",  
    },
    });

// Send an email using async/await
// 
let emailToken = jwt.sign(email,"emailyy")

    const info = await transporter.sendMail({
        from: '"Hey" <asmaasoliman191999@gmail.com>',
        to: email,
        subject: "Hello ✔",
        text: "please Confirm your email", // Plain-text version of the message
        html: template(emailToken), // HTML version of the message
    });

    console.log("Message sent:", info.messageId);
}