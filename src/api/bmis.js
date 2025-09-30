const express = require("express");
const router = express.Router();

// Dummy in-memory data
let bmis = [{ id: 1, rosterId: 1, weight: 70, height: 1.75, bmi: 22.9 }];

// GET /bmis → Retrieve all records
router.get("/", (req, res) => {
  res.json(bmis);
});

// POST /bmis → Add a new record
router.post("/", (req, res) => {
  const newBmi = { id: bmis.length + 1, ...req.body };
  bmis.push(newBmi);
  res.status(201).json(newBmi);
});

module.exports = router;
