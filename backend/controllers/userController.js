// 3. functions related to user

const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  await User.create({ username, email, password });

  res.json({ success: true, message: "User created successfully" });
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const user = await User.findOne({ email, password });

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }

  res.json({ success: true, message: "User logged in successfully" });
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
