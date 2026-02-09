const express = require("express");
const cors = require("cors");

const app = express();
const userRouter = require("../src/routes/userRouter.js");
const generalSettingRouter = require("../src/routes/Setting/generalRouting.js");

app.use(cors());
app.use(express.json());

app.use("/auth", userRouter);
app.use("/setting/general", generalSettingRouter);
module.exports = app;
