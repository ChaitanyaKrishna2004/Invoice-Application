const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const userRouter = require("../src/routes/userRouter.js");
const generalRoture = require("../src/routes/Setting/generalRouting.js");

app.use(cors());
app.use(express.json({ type: ["application/json", "text/plain"] }));
app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", userRouter);
app.use("/setting/general", generalRoture);
module.exports = app;
