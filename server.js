const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: new Date(),
      description: "Teste descriptionm",
    },
    {
      title: "Test article",
      createdAt: new Date(),
      description: "Teste descriptionm",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
