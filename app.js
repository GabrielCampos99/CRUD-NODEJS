const express = require("express");
const app = express();
const PORT = 8012;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv/config");
//24:45
//34:35
//Importando Rotas;
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//Rotas
app.get("/", (req, res) => {
  res.send("Estamnos na home");
});

//Conectando ao DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Banco de dados conectado!")
);

app.listen(PORT);
