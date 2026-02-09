const express = require("express");
const generalRougtin = express.Router();
const general = require("../../controllers/Setting/general.js");

generalRougtin.post("/create", general);

module.exports = general;
