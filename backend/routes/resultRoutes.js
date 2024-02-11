// result routes

const express = require("express");
const {
  handleFetchResults,
  handleSaveResults,
} = require("../controllers/resultController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

// fetch results -
// only logged in users can access results
router.post("/show", authMiddleware, handleFetchResults);
router.post("/", authMiddleware, handleSaveResults);

module.exports = router;
