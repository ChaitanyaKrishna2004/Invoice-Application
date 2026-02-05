const express = require("express");
const userRouter = express.Router();

const signup = require("../controllers/userController/signup.js");

userRouter.post("/signup", signup);

module.exports = userRouter;
