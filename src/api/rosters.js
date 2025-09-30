const express = require("express");
const router = express.Router();

// Dummy in-memory data
let rosters = [{ id: 1, name: "Juan Dela Cruz", age: 20 }];

// GET /rosters → Retrieve all records
router.get("/", (req, res) => {
  res.json(rosters);
});

// POST /rosters → Add a new record
router.post("/", (req, res) => {
  const newRoster = { id: rosters.length + 1, ...req.body };
  rosters.push(newRoster);
  res.status(201).json(newRoster);
});

module.exports = router;
