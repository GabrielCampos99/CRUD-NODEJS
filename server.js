const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Article = require("./models/articles");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/blog");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(8000);
