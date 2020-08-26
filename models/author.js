const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Author is the model name i.e table name in the database
module.exports = mongoose.model("Author", authorSchema);
