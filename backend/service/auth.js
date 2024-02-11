const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");

const setUser = (userId) => {
  if (!userId) return null;

  return jwt.sign(
    {
      userId,
    },
    SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
};

const getUser = (token) => {
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

module.exports = {
  getUser,
  setUser,
};
