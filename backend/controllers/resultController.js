// result controller

const Result = require("../models/result");

async function handleFetchResults(req, res) {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const results = await Result.findOne({ email: email });
  res.json({ success: true, data: results });
}

async function handleSaveResults(req, res) {
  const { email, score, category } = req.body;

  if (!email || !score || !category) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const result = await Result.findOne({ email });

  if (result) {
    await Result.updateOne({ email }, { $set: { score, category } });
    res.json({ success: true, message: "Results saved successfully" });
    return;
  }

  await Result.create({ email, score, category });

  res.json({ success: true, message: "Results saved successfully" });
}

module.exports = {
  handleFetchResults,
  handleSaveResults,
};
