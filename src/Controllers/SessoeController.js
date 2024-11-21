const SessoesModel = require("../Models/SessoesModel");
const { populate } = require("../Models/UsuarioModel");

class SessoesController {

    async create(req, res){
        try {
            
            const sessoes = await SessoesModel.create(req.body);
     
            res.status(200).json(sessoes);
            
        } catch (error) {

            res.status(500).json({message: "Erro!", error: error.message}); //mostra a mensagem do erro,(500)})

        }
    }

    async read(req, res){
        try {

            const sessoess = await SessoesModel.find().populate('id_usuario', '-senha');
    
            res .status(200).json(sessoess);
            
        } catch (error) {

            res.status(500).json({message: "Erro!", error: error.message}); //mostra a mensagem do erro,(500)})
            
        }
    }

    async delete(req, res){
        try {

            const { id } = req.params
   
            await SessoesModel.findByIdAndDelete(id);
   
            return res.status(200).json({"mensagem": "Sessao deletado com sucesso"});
            
        } catch (error) {

            res.status(500).json({message: "Erro!", error: error.message}); //mostra a mensagem do erro,(500)})
            
        }
    }
}

module.exports = new SessoesController();