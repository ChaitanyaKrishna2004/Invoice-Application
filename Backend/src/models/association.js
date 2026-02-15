const User = require("./user.js");
const General = require("./Setting/general.js");
const Items = require("./Setting/items.js");

User.hasMany(General, {
  foreignKey: "createdby",
  as: "generalsetting",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

General.belongsTo(User, {
  foreignKey: "createdby",
  as: "creator",
}); 

// one General -> Many Items
General.hasMany(Items, {
  foreignKey: "general_id",
  as: "item",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Each Item belongs to one General
Items.belongsTo(General, {
  foreignKey: "general_id",
  as: "general",
});

module.exports = {
  User,
  General,
  Items,
};
