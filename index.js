const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use("/images", express.static("images"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const PORT = process.env.NODE_ENV || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
