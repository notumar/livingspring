const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("services", { title: "service" });
});

let pages = [
  "senior-home-care-services",
  "elderly-care-services",
  "respite-care-services",
  "hospice-care-services",
  "fall-prevention-care-services",
  "post-surgical-care-services",
  "personal-care-and-companionship",
  "alzheimer-demential-care-services",
];

for (let page of pages) {
  router.get(`/${page}`, (req, res) => {
    res.render(page, { title: page.replace(/-/g, " ") });
  });
}

module.exports = router;
