const UsuarioModel = require("../Models/UsuarioModel")

class UsuarioController {

    async create(req, res){
        try { //Capturando o erro de criar dois do msm nome, e trata lo antes de crashar o server
            
            const  usuario = await UsuarioModel.create(req.body);
    
            res.status(200).json(usuario);
            
        } catch (error) {
            res.status(500).json({message: "Erro!", error: error.message}); //mostra a mensagem do erro,(500)})
        }

    }

    async read(req, res){
        try {

            const usuarios = await UsuarioModel.find();
    
            return res.status(200).json(usuarios);
            
        } catch (error) {
            res.status(500).json({message: "Erro!", error: error.message}); //mostra a mensagem do erro,(500)})
        }

    }

    async update(req, res){
        try {
            const { id } = req.params;
    
            const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body,{ new: true });
    
            return res.status(200).json(usuario);
            
        } catch (error) {
            res.status(500).json({message: "Erro!", error: error.message});
        }

    }

    async delete(req, res){
        try {
            const { id } = req.params
    
            await UsuarioModel.findByIdAndDelete(id);
    
            return res.status(200).json({"mensagem": "Usuario deletado com sucesso"});
            
        } catch (error) {
            res.status(500).json({message: "Erro!", error: error.message});
        }
        
    }
}

module.exports = new UsuarioController();