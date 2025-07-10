const express = require("express");
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');
require("dotenv").config();
const users = [];

async function main(){
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const info = await transporter.sendMail({
        from: `You <${process.env.EMAIL_FROM}>`,
        to: 'viradamayanti56@gmail.com',
        subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `
    });

    console.log(info.messageId);
}

main()
.catch(err => console.log(err));

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/users", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.status(200).json({success: true, message: "Users retrieved successfully!", data: rows});
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const data = req.body;
    users.push(data);
    res.status(201).json({success: true, message: "New user added succesfully!", data: users});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
