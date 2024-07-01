const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/helper");
const adminData = require("./admin");

router.get("/shop", (req, res) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
