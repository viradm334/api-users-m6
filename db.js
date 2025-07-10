const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
).promise();

module.exports = db;