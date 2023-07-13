const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("this is first express route");
});

app.get("/about", (req, res) => {
  res.send("this is about express route");
});

app.get("/dowland", (req, res) => {
  res.send("this is dowland express route");
});

app.listen(port, () => {
  console.log("server is running");
});
