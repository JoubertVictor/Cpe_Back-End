const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoeController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessaoValidator = require("./Validators/SessaoValidator");


const rotas = Router();

//USUARIOS
rotas.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.delete("/usuarios/:id",UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioController.update);

//SESSOES
rotas.post("/sessoes", SessaoValidator.create, SessoesController.create);
rotas.get("/sessoes", SessoesController.read);
rotas.delete("/sessoes/:id",SessaoValidator.destroy, SessoesController.delete);

module.exports = rotas;
