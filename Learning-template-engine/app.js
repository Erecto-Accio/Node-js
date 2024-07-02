const express = require("express");
const path = require("path");
const app = express();

// setting up the template engine
app.set("view engine", "pug");
app.set("views", "views");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// use static file
app.use(express.static(path.join(__dirname, "public")));

// adminRoutes
const adminData = require("./routes/admin");

// shop routes
const shopRouter = require("./routes/shop");

// Root Directory
const rootDir = require("./util/helper");

app.use("/admin", adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Listening");
});
