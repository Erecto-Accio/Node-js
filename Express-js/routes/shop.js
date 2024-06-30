const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello from the response</h1>");
});

module.exports = router;
