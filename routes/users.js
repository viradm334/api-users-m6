const express = require("express");
const router = express.Router();
const db = require('../db');
const users = [];

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
