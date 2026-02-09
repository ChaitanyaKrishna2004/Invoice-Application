// only admin can set the general setting
// admin can able to see and edit created general setting
// general setting has only one row for the present year

const General = require("../../models/Setting/general.js");

const general = (req, res) => {
  try {
    const { start, end } = req.body;
    console.log(start);
    console.log(end);
    const user_id = req.user_id;

    const [start_month, start_year] = start.split(" ").map(Number);
    const [end_month, end_year] = end.split(" ").map(Number);

    const startdate = new Date(start_year, start_month);
    const enddate = new Date(end_year, end_month);
    console.log(`${startdate} ${enddate}`);

    res.status(200).send("hellooooooo");
    // const creategeneral = General.create({});
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = general;
