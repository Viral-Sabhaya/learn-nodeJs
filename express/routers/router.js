const express = require("express");
const router = express.Router();
const middleware = require("../middleware");

router.use(middleware);

router.get("/", (req, res) => {
  res.render("index", {
    title: "index file",
  });
  // res.sendFile(`${pathDir}/index.html`);
});

router.get("/home", (req, res) => {
  res.render("home", {
    title: "home file",
  });
  // res.sendFile(`${pathDir}/home.html`);
});

router.get("/download", (req, res) => {
  res.render("dowland", {
    title: "dowland",
  });
});

module.exports = router;
