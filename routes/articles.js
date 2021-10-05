const express = require("express");
const route = express.Router();

route.get("/new", (req, res) => {
  res.render("articles/new");
});

route.post("/", (req, res) => {});
module.exports = route;
