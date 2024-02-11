// create result model

const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
