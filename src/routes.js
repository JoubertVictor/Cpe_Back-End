const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");

const rotas = Router();

rotas.post("/usuarios", UsuarioController.create);
rotas.get("/usuarios", UsuarioController.rea);


module.exports = rotas;
