// 3. functions related to user

const User = require("../models/user");
const { setUser, getUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const user = await User.create({ username, email, password });

  const userId = user._id;
  const token = setUser(userId);

  res.json({
    success: true,
    message: "User created successfully",
    token: token,
  });
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

  // create a token

  if (user) {
    const userId = user._id;
    const token = setUser(userId);

    res.json({
      success: true,
      message: "User logged in successfully",
      token: token,
    });

    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
