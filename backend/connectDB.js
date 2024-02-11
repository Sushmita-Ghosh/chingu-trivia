// connect to database
const mongoose = require("mongoose");
var colors = require("colors");
const { MONGO_URI } = require("./config/config");

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
