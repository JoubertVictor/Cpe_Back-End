const SessoesModel = require("../Models/SessoesModel");
const { populate } = require("../Models/UsuarioModel");

class SessoesController {

    async create(req, res){
       const sessoes = await SessoesModel.create(req.body);

       return res.status(200).json(sessoes);
    }

    async read(req, res){
        const sessoess = await SessoesModel.find().populate('id_usuario', '-senha');

        return res .status(200).json(sessoess);
    }

    async delete(req, res){
         const { id } = req.params

         await SessoesModel.findByIdAndDelete(id);

         return res.status(200).json({"mensagem": "Sessao deletado com sucesso"});
    }
}

module.exports = new SessoesController();