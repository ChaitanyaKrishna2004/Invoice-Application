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
            type: DataTypes.STRING(200),
        },
        logo_file_store_name:{
            type: DataTypes.STRING(),
        },
        business_name:{
            type: DataTypes.STRING(),
            allowNull: false,
        },
        website:{
            type: DataTypes.STRING(),
        }
    }
)