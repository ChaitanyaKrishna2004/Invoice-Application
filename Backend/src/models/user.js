const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Please enter username",
        },
        notEmpty: {
          msg: "user name can not be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter email",
        },
        notEmpty: {
          msg: "Email can not be empty",
        },
        isEmail: {
          msg: "Please enter a valid email address",
        },
      },
    },
    hash_password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter password",
        },
        notEmpty: {
          msg: "Password can not be empty",
        },
      },
    },
    // admin | staff ,| client
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a valid role",
        },
        notEmpty: {
          msg: "Role can not be empty",
        },
        isIn: {
          args: [["Admin", "Staff", "Client"]],
          msg: "Role must be Admin, Staff, or Client",
        },
        references: {
          model: "users",
          key: "user_id",
        },
      },
    },
  },
  {
    tableName: "User",
    timestamps: true,
  },
);

module.exports = User;
