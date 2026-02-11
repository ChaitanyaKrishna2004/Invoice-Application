// only admin can set the general setting
// admin can able to see and edit created general setting
// general setting has only one row for the present year

const General = require("../../models/Setting/general.js");

const general = async (req, res) => {
  try {
    const { start, end } = req.body;
    const user = req.user;
    console.log(user);

    // Validate that start and end are provided
    if (!start || !end) {
      return res.status(400).send("start and end dates are required");
    }

    const [start_month, start_year] = start.split(" ").map(Number);
    const [end_month, end_year] = end.split(" ").map(Number);

    const startdate = new Date(start_year, start_month - 1, 1);
    const enddate = new Date(end_year, end_month - 1, 1);

    console.log(user);

    const newgeneral = await General.create({
      start_year: startdate,
      end_year: enddate,
      createdby: user.user_id,
    });

    res.status(200).send(newgeneral);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = general;
