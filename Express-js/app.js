const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// adminRoutes
const adminRouter = require("./routes/admin");

// shop routes
const shopRouter = require("./routes/shop");

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Listening");
});
