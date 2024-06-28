const http = require("http");
const route = require("./routes");
const server = http.createServer(route.handler);

server.listen(3000, () => {
  console.log(`Listening to port ${3000}`);
});
