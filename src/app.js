const express = require("express");
//load the env file
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const { dbConnect } = require("./db/dbConnection");
//make the db call
dbConnect();

const app = express();

//make the server

app.listen(PORT, (req, res) => {
  console.log(`Express server is listening on port ${PORT}`);
});
