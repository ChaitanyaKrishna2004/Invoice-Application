// user can login username and email
require("dotenv").config();
const User = require("../../models/user.js");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    let { login, password } = req.body;

    login = login.trim();
    password = password.trim();

    if (!login) {
      return res.status(400).send("user or email is required");
    }

    if (!password) {
      return res.status(400).send("password is required");
    }

    const user = await User.findOne({
      where: {
        [Op.or]: [
          {
            username: login,
          },
          {
            email: login,
          },
        ],
      },
    });

    if (!user) {
      return res.status(400).send("Invalid login detail's");
    }

    const isPasswordcorrect = await bcrypt.compare(
      password,
      user.dataValues.hash_password,
    );

    if (!isPasswordcorrect) {
      return res.status(400).send("Invalid login detail's");
    }

    const token = jwt.sign(
      { user_id: user.dataValues.user_id },
      process.env.privateKey,
      { expiresIn: "5m" },
    );

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 5*60*1000),
      })
      .send("Login Sucessfull !!!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = login;
