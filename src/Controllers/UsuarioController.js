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

            //Vamos ver se o usuario ainda existe, pra q ai dps fazer algum update

            const usuarioEncontrado = await UsuarioModel.findById(id);
            
            if (!usuarioEncontrado) 
                return res.status(404).json({message: "Usuário não encontrado"});

            const usuario = await usuarioEncontrado.set(req.body).save()

            return res.status(200).json(usuario);
            
        } catch (error) {
            res.status(500).json({message: "Erro!", error: error.message});
        }

    }

    async delete(req, res){
        try {
            const { id } = req.params;

            const usuarioEncontrado = await UsuarioModel.findById(id);

            if (!usuarioEncontrado) 
                return res.status(404).json({message: "Usuário não encontrado"});

            await usuarioEncontrado.deleteOne();
    
            res.status(200).json({mensagem: "Usuario deletado com sucesso"});
            
        } catch (error) {
            res.status(500).json({message: "Erro!", error: error.message});
        }
        
    }
}

module.exports = new UsuarioController();