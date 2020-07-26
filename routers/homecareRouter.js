const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home-care-resources", { title: "Home Care Resources" });
});
router.get("/getting-started", (req, res) => {
  res.render("home-care-getting-started", { title: "Home Care Resources" });
});

module.exports = router;
