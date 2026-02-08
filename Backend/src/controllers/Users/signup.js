const User = require("../../models/user");
const validator = require("validator");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    let { username, email, password, role } = req.body;

    username = username.trim();
    email = email.trim();
    password = password.trim();

    if (!username) {
      return res.status(400).send("user name is required");
    }

    if (!email) {
      return res.status(400).send("email is required");
    }

    if (!password) {
      return res.status(400).send("password is requires");
    }

    const isUsernameunique = await User.findOne({
      where: {
        username,
      },
    });

    if (isUsernameunique) {
      return res.status(400).send("user name is already exist");
    }

    const isEmailvalid = validator.isEmail(email);

    if (!isEmailvalid) {
      throw new Error("Email is Invalid");
    }

    isEmailunique = await User.findOne({
      where: {
        email,
      },
    });

    if (isEmailvalid) {
      return res.status(400).send("email is already exist");
    }

    const isPasswordStrong = validator.isStrongPassword(password);
    if (!isPasswordStrong) {
      throw new Error("Password is not strong");
    }

    const hash_password = await bcrypt.hash(password, 10);

    if (!["Admin", "Staff", "Client"].includes(role)) {
      throw new Error("Invalid role");
    }

    const newuser = await User.create({
      username,
      email,
      hash_password,
      role,
    });

    res.status(200).send("Successful create the new user!!!");
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).send(error.errors[0].message);
    }
    res.status(400).send(error.message);
  }
};

module.exports = signup;
