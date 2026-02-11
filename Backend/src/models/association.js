const User = require("./user.js");
const General = require("./Setting/general.js");

User.hasMany(General, {
  foreignKey: "createdby",
  as: "generalsetting",
});

General.belongsTo(User, {
  foreignKey: "createdby",
  as: "creator",
});

module.exports = {
  User,
  General,
};
