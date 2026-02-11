const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const auth = async (req, res, next) => {
  try {
    if (!req.cookies) {
      return res.status(400).send("Invalid Token 1");
    }
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).send("Invalid Token 2");
    }

    var decoded = jwt.verify(token, process.env.privateKey);

    if (!decoded) {
      return res.status(400).send("Invalid Token 3");
    }

    // console.log(decoded);
    const { user_id } = decoded;
    console.log(user_id);
    const user = await User.findOne({
      where: {
        user_id,
      },
    });

    if (!user) {
      return res.status(400).send("Invalid Token 4");
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = auth;
