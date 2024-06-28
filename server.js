const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(`<html>
      <head>
      <title>Welcome Page</title>
      </head>
      <body>
      <form action="/message" method="POST">
      <input type="text" name="message" />
      <button type="submit">Submit</button>
      </form>
      </body>
      </html>
      `);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dummy!!!");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html> 
    <head><title>Intro page</title></head>
    <body>
     <h1>Welcome page</h1>
      <h2>Tousif Tasrik </h2>
      </body>
      </html>`);
  res.end();
});

server.listen(3000, () => {
  console.log(`Listening to port ${3000}`);
});
