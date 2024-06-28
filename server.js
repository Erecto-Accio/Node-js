const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.write(
    "<html><head><title>Hiii</title></head><body><h1>Hello World</h1></body></html>"
  );
  res.end();
});

server.listen(3000, () => {
  console.log(`Listening to port ${3000}`);
});
