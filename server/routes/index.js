// import { data1, data2, data3, position, status } from "../data/data";
const { chart, position, status } = require("../data/data");
const express = require("express");
const router = express.Router();

router.get("/api", function (req, res, next) {
  res.send({ dataList: { chart, position, status } });
});

module.exports = router;
