const express = require("express");
const colors = require("colors");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./connectDB");
const cors = require("cors");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(5000, () => {
  console.log(`Server started on port 5000`.green.underline.bold);
});
