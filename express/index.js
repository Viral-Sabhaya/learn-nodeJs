const express = require("express");
// const path = require("path");
const app = express();
const port = 3000;
const router = require("./routers/router");

app.set("view engine", "ejs");
app.use(router);
// const pathDir = path.join(__dirname, "public");
// app.use(express.static(pathDir));

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
