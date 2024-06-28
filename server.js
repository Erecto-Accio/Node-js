const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/message" && method === "POST") {
    res.write(
      `<html>
    <head>
    <title>Hiii</title>
    </head>
    <body>
    <h1>Redirect Page</h1>
    <h2> Welcome to the redirected page</h2>
    </body>
    </html > `
    );
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    <head>
        <title>Welcome Page</title>
    </head>
    
    <body>
      <h1>Welcome page</h1>
      <h2>Tousif Tasrik </h2>
      <form action="/message" method="POST">
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
      `);
  res.end();
});

server.listen(3000, () => {
  console.log(`Listening to port ${3000}`);
});
