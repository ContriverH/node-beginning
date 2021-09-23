const http = require("http"); // We need to require a library that is going to start the server.
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  // We wil write the requried functionality here
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("Welcome to my server"); // this is going to be sent to each and every person listening to our server.
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (err) {
  if (err) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is running at port: " + port);
  }
});
