const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database.js");

const Items = sequelize.define(
  "Items",
  {
    Items_Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    general_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "General",
        key: "general_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      validate: {
        notNull: {
          msg: "General id is null",
        },
        isUUID: {
          args: 4,
          msg: "The general id should be uuid4",
        },
        notEmpty: {
          msg: "general id can not be empty",
        },
      },
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter Quantity",
        },
        notEmpty: {
          msg: "Quantity can not be empty",
        },
        isInt: {
          msg: "Quantity should only contain numeric value's",
        },
        min: {
          args: [0],
          msg: "Quatity can not be negative",
        },
      },
    },
    Title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter Title",
        },
        notEmpty: {
          msg: "Title can not be empty",
        },
        len: {
          args: [3, 100],
          msg: "Tile must be between 3 to 100 characters",
        },
      },
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: "Price should only contail numeric value's",
        },
        min: {
          args: [0],
          msg: "Price cannot be negative",
        },
      },
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [3, 250],
          msg: "Description must be between 3 to 250",
        },
      },
    },
  },
  {
    tableName: "Items",
    timestamps: true,
  },
);

module.exports = Items;
