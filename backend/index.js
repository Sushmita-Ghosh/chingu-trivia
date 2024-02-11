const express = require("express");
const colors = require("colors");
const userRouter = require("./routes/userRoutes");
const resultRouter = require("./routes/resultRoutes");
const connectDB = require("./connectDB");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/result", resultRouter);

app.listen(5000, () => {
  console.log(`Server started on port 5000`.green.underline.bold);
});
