const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/index");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
    samesite: "none",
    secure: true,
  })
);

app.use("/", indexRouter);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log("http server runnning PORT :", PORT)
);

module.exports = server;
