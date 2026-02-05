const app = require("./src/app.js");
const sequelize = require("./src/config/database.js");

const PORT = process.env.PORT;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected....");

    await sequelize.sync({ alter: true });
    console.log("Models synced....");

    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed", error);
  }
})();
