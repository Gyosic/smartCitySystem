const { chart, position, status } = require("../data/data");
const express = require("express");
const router = express.Router();

router.get("/", function (res, req, next) {
  res.send("Hello World! Smart City System Server!");
});

router.get("/api", function (req, res, next) {
  res.send({ dataList: { chart, position, status } });
});

module.exports = router;
