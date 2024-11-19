const { z} = require("zod");
const { validateRequest } = require("zod-express-middleware");

// {
// "email": "teste1@sjaso.com",
// "senha": "AJnsdkan47",
// "nome": "ELEN",
// "cargo": "devLider",
// "status": "Triste",
// }

const create = validateRequest({
    body: z.object({
        nome: z.string({required_error:"O nome é obrigatorio"}),
        email: z.string({required_error:"O email é obrigatorio"}).email({required_error:"Email em formato valido"}),
        senha: z.string({required_error:"A senha é obrigatorio"}),
        cargo: z.string({required_error:"O cargo é obrigatorio"}),
        status: z.string({required_error:"O status é obrigatorio"}),
    }),
});

module.exports = {
    create,
};