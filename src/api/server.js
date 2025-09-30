const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const rosterRoutes = require("./rosters");
const bmiRoutes = require("./bmis");

// Use routes
app.use("/rosters", rosterRoutes);
app.use("/bmis", bmiRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to AlphaFit REST API. Try /rosters or /bmis");
});

// Run server
app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});
