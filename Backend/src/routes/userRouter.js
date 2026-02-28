const express = require("express");
const userRouter = express.Router();

const signup = require("../controllers/Users/signup.js");
const login = require("../controllers/Users/login.js");
const logout = require("../controllers/Users/logout.js");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);

module.exports = userRouter;
