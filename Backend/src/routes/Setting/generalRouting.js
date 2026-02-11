const express = require("express");
const generalRoture = express.Router();

const general = require("../../controllers/Setting/general.js");
const userAuth = require("../../middleware/auth.js");

generalRoture.post("/create", userAuth, general);

module.exports = generalRoture;
