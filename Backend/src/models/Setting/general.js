const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

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
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      validate: {
        notNull: {
          msg: "Please enter createdby",
        },
        isUUID: {
          args: 4,
          msg: "Invalid created by",
        },
      },
      references: {
        model: "User",
        key: "user_id",
      },
    },
  },
  {
    tableName: "General",
    timestamps: true,
  },
);

module.exports = General;
