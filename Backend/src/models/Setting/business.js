const {DataTypes} = require("sequelize");
const sequelize = require("../../config/database.js");

const Business = sequelize.define(
    "Business",
    {
        business_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        general_id:{
            type: DataTypes.UUID,
            validate:{
                isUUID:{
                    args: 4,
                    msg:"Please enter valid general id",
                }
            }
        },
        logo_file_name:{
            type: DataTypes.STRING(),
        },
        logo_file_store_name:{
            type: DataTypes.STRING(),
        },
        business_name:{
            type: DataTypes.STRING(),
            allowNull: false,
        },
        Address:{
            type: DataTypes.TEXT,
        },
        Extra_Business_Info:{
            type: DataTypes.TEXT,
        },
        website:{
            type: DataTypes.STRING(),
        },

    }
)