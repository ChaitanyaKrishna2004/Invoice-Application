const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { FaS } = require("react-icons/fa6");

const General = sequelize.define(
  "General",
  {
    general_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    start_year: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter start year",
        },
      },
    },
    end_year: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter end date",
        },
      },
    },
    createdby: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter createdby",
        },
        isUUID: {
          args: 4,
          msg: "Invalid created by",
        },
      },
    },
  },
  {
    tableName: "General",
    timestamps: true,
  },
);

module.exports = General;
