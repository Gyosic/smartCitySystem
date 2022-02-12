const { chart, position, status } = require("../data/data");
const express = require("express");
const router = express.Router();

router.get("/api", function (req, res, next) {
  res.send({ dataList: { chart, position, status } });
});

module.exports = router;
