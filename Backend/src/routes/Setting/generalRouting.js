const express = require("express");
const generalRoture = express.Router();

const general = require("../../controllers/Setting/General/general.js");
const userAuth = require("../../middleware/auth.js");
const items = require("../../controllers/Setting/Items/items.js");

generalRoture.post("/create", userAuth, general);
generalRoture.post("/item/create", userAuth, items);

module.exports = generalRoture;
