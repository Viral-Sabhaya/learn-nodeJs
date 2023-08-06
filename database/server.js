const express = require("express");
const app = express();
const port = 3000;
const user = require("./connection");

// POST GET PUT/PATCH  DELETE0

// POST ==> data send to database
// GET ==> data get from to database
// PUT/(PATCH) ==> Update data to database
// DELETE ==> Delete data from to database

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
