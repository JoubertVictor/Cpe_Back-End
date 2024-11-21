const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
});

//executar funçoes antes ou dps de determinadas açoes
UsuarioSchema.pre("save", async function (next) {
    const user = this

    if (user.isModified("senha")) { //ocorre sempre a senha esta em mudança
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.senha, salt)

        user.senha = hash;

        console.log({salt, hash})
    }

next()
});  //antes de salvar

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;