const http = require("http");
const port = 3000;

// create server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hii this is my first nodejs server");
  } else if (req.url == "/data") {
    res.end("hii this is my first data page server");
  } else if (req.url == "/about") {
    res.end("hii this is my about page server");
  } else {
    res.end("page not found!!");
  }
});

server.listen(port, () => {
  console.log(`Server is running port no ${port}`);
});
