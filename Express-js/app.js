const express = require("express");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// adminRoutes
const adminRouter = require("./routes/admin");

// shop routes
const shopRouter = require("./routes/shop");

app.use(adminRouter);
app.use(shopRouter);
app.listen(3000, () => {
  console.log("Listening");
});
