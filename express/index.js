const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const pathDir = path.join(__dirname, "public");

app.use(express.static(pathDir));

app.get("/", (req, res) => {
  res.sendFile(`${pathDir}/index.html`);
});

app.get("/home", (req, res) => {
  res.sendFile(`${pathDir}/home.html`);
});

app.get("/download", (req, res) => {
  res.download(`${pathDir}/index.html`);
});

app.listen(port, () => {
  console.log("server is running");
});
