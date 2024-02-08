// connect to database
const mongoose = require("mongoose");
var colors = require("colors");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.cnjhvkt.mongodb.net/users"
  );
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
