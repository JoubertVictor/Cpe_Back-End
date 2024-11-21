const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email : {
        type: String,
        unique: true,  //Isso mostra ao programa que o email deve ser único. --> P/ tem q apagar no BD e criar dnv
    },
    senha : String,
    nome :  {
        type: String,
        unique: true,  //Isso mostra ao programa que o nome deve ser único. --> N pode ter dois com o msm, no BD
    },
    cargo : String,
    status: String
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;