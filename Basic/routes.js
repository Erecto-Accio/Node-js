const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
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
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/confirmation");
        return res.end();
      });
    });
  }

  if (url === "/confirmation") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Confirmation Page</title>
        </head>
        <body>
          <h1>Message Saved!</h1>
          <p>Your message has been saved successfully.</p>
          <a href="/">Go back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Intro page</title>
      </head>
      <body>
        <h1>Welcome page</h1>
        <h2>Tousif Tasrik</h2>
      </body>
    </html>
  `);
  res.end();
};

module.exports = {
  handler: requestHandler,
  message: "Routing section",
};
