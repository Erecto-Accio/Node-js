const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/helper");
router.get("/shop", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
