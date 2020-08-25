const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8079;
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
