// 2. Set up routes
const express = require("express");
const {
  handleUserSignup,
  handleUserLogin,
} = require("../controllers/userController");

// create a router
const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
