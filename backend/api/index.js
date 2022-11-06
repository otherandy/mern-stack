const express = require("express");
const cors = require("cors");
const app = express();
require("./database");
// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));
module.exports = app;
