const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoeController");
const UsuarioValidator = require("./Validators/UsuarioValidator");

const rotas = Router();

//USUARIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete("/usuarios/:id", UsuarioController.delete);
rotas.put('/usuarios/:id', UsuarioController.update);

//SESSOES
rotas.post("/sessoes", SessoesController.create);
rotas.get("/sessoes", SessoesController.read);
rotas.delete("/sessoes/:id", SessoesController.delete);

module.exports = rotas;
