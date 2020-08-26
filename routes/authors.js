const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// Get All Author
router.get("/", async (req, res) => {
  const searchOption = {};
  if (req.query.name != null || req.query.name !== "") {
    searchOption.name = new RegExp(req.query.name, "i");
    /* req.query is used becoz it's get method. If it is post method it would be req.body*/
  }
  try {
    const author = await Author.find(searchOption);
    res.render("authors/index", { author: author, searchOption: req.query });
  } catch (error) {
    res.redirect("/");
  }
});

// Get New Author
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create New Author
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name, //req.body.name will give you the input type value. It can be used after installing bode-parser
  });
  try {
    const newAuthor = await author.save();
    //res.redirect(`authors/${newAuthor.id}`);
    res.redirect("authors/");
  } catch (error) {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error Creating Author",
    });
  }

  //res.send(req.body.name);
});

module.exports = router;
