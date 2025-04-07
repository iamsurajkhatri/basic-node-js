const mongoose = require("mongoose");
require("dotenv").config();
async function dbConnect() {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then((data) => console.log("Db connection is created successfully!!"))
    .catch((err) => console.log(err));
}
module.exports = { dbConnect };
