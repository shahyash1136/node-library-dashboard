if (process.env.NODE_ENV !== "production") {
  require("dotenv").config("./.env");
}

const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const indexRoute = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected To Mongoose"));

app.use("/", indexRoute);

const port = process.env.PORT || 8079;
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
