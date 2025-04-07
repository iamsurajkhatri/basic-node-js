const express = require("express");
const PORT = process.env.PORT || 8000;
const { dbConnect } = require("./db/dbConnection");
//make the db call
dbConnect();

const app = express();

//make the server
app.get("/", (req, res) => {
  res.send("Welcome to our node js application");
});
app.get("/test", (req, res) => {
  res
    .status(200)
    .json({
      message: "Data fetched succesffully!!",
      data: [{ name: "suraj", age: 29 }],
    });
});
app.listen(PORT, (req, res) => {
  console.log(`Express server is listening on port ${PORT}`);
});
