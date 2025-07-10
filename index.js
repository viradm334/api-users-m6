const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const routes = require('./routes/users');
const logMiddleware = require('./middlewares/loggingMiddleware');

// Middleware
app.use(express.json());
app.use(logMiddleware)

// Route
app.use(routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});