// predefined = 1 | Hosting for 1 year | 2500 | web hosting space for 1 year
// 1 | service for 1 year | 3500 | web service space for 1 year
// 2 | ssl certificate for 1 year | 1200 | ssl certificate for 1 year
// 1 | cdn service for 1 year | 120 | cdn certificate for 1 year

const sequelize = require("../../../config/database.js");
const General = require("../../../models/Setting/general.js");
const ItemsModel = require("../../../models/Setting/items.js");
const Items = async (req, res) => {
  try {
    const { predefined, general_id } = req.body;

    if (!predefined) {
      return res.status(400).send("Predefined data is required");
    }

    if (!general_id) {
      return res.status(400).send("General Id is required");
    }

    const general = await General.findByPk(general_id);

    if (!general) {
      return res.status(400).send("Invalid general_id");
    }

    const ItemsArray = predefined
      .trim()
      .split("\n")
      .filter((line) => line.trim() != "")
      .map((line) => {
        const [Quantity, Title, Price, Description] = line
          .split("|")
          .map((val) => val.trim());

        return {
          general_id,
          Quantity: parseInt(Quantity),
          Title,
          Price: parseInt(Price),
          Description,
        };
      });

    // console.log("ItemsArray:", ItemsArray);

    const bulkItemscreate = await sequelize.transaction(async (t) => {
      return await ItemsModel.bulkCreate(ItemsArray, {
        validate: true,
        transaction: t,
      });
    });
    res.status(200).send(bulkItemscreate);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = Items;
