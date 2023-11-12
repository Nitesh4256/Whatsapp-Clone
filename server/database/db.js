const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.MONGO_URL;
exports.Connection = async () => {
  try {
    await mongoose.connect(URL),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

    console.log("Connected To The DataBase!");
  } catch (error) {
    console.log("Error while connection to DataBase");
    console.log(error);
  }
};
