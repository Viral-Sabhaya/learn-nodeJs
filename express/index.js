const express = require("express");
// const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// const pathDir = path.join(__dirname, "public");
// app.use(express.static(pathDir));

app.get("/", (req, res) => {
  res.render("index", {
    title: "index file",
  });
  // res.sendFile(`${pathDir}/index.html`);
});

app.get("/home", (req, res) => {
  res.render("home", {
    title: "home file",
  });
  // res.sendFile(`${pathDir}/home.html`);
});

app.get("/download", (req, res) => {
  res.render("dowland", {
    title: "dowland",
  });
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
