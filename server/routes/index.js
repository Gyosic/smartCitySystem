// import { data1, data2, data3, position, status } from "../data/data";
const { chart, position, status } = require("../data/data");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello World!");
});

router.get("/chart", function (req, res, next) {
  res.json({ response: chart });
});

router.get("/operation", function (req, res, next) {
  res.json({ response: position });
});

router.get("/service", function (req, res, next) {
  res.json({ response: status });
});

module.exports = router;
