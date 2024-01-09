const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { salvarSeguro, listarSeguros } = require("./seguro-service");
const makes = require("./makes.json");
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.route("/api/seguros").post(salvarSeguro);
app.route("/api/seguros").get(listarSeguros);
app.route("/api/makes").get((req, res) => res.json(makes));

const HOST = "localhost";
const PORT = process.env.PORT ? process.env.PORT : 9000;

const httpServer = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
