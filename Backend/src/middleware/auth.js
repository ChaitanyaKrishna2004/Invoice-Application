const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const auth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(400).send("Invalid Token");
  }

  var decoded = await jwt.verify(token, process.env.privateKey);

  if (!decoded) {
    return res.status(400).send("Invalid Token");
  }

  console.log(decoded);
  const { user_id } = decoded;

  req.user_id = user_id;
  next();
};

module.exports = auth;
