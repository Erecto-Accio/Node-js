const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/helper");
const adminData = require("./admin");

router.get("/shop", (req, res) => {
  con;
  res.render("shop");
});

module.exports = router;
