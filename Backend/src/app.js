const express = require("express");
const cors = require("cors");

const app = express();
const userRouter = require("../src/routes/userRouter.js");

app.use(cors());
app.use(express.json());

app.use("/auth", userRouter);

module.exports = app;
