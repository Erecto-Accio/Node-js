const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/helper");
const adminData = require("./admin");

router.get("/shop", (req, res) => {
  const products = adminData.products;
  res.render("shop", { product: products, docTitle: "Book Shop" });
});

module.exports = router;
