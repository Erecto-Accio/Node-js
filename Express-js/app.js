const http = require("http");
const express = require("express");

const app = express();
// middleware
app.use((req, res, next) => {
  console.log("In the first middleware");
  next(); // Allows the request to continue the next middleware
});
app.use((req, res, next) => {
  console.log("In the second middleware");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Listening");
});
