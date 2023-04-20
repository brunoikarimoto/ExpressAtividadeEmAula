const express = require("express");
const rotas = express.Router();
const TimeController = require("./controllers/TimeController");

rotas.get("/time", TimeController.read);
rotas.post("/time", TimeController.create);
rotas.post("/time/:id", TimeController.update);
rotas.get("/time/:id", TimeController.busca);
rotas.delete("/time/:id", TimeController.delete);

module.exports = rotas;