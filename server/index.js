const userData = require("./api.json");
const fs = require("fs");
const http = require("http");
const port = 3000;

// create server
const server = http.createServer((req, res) => {
  const jsonData = fs.readFileSync("api.json", "utf-8");
  const objData = JSON.parse(jsonData);

  if (req.url == "/") {
    res.end("hii this is my first nodejs server");
  } else if (req.url == "/data") {
    res.end("hii this is my first data page server");
  } else if (req.url == "/about") {
    res.end(objData[0].name);
  } else {
    res.end("404 : page not found!!");
  }
});

server.listen(port, () => {
  console.log(`Server is running port no ${port}`);
});
