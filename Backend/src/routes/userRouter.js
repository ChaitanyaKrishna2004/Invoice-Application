const express = require("express");
const userRouter = express.Router();

const signup = require("../controllers/Users/signup.js");
const login = require("../controllers/Users/login.js");

userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;
