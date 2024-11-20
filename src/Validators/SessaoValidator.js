const { default: mongoose } = require("mongoose");
const { z} = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        id_usuario: z.custom(mongoose.isValidObjectId, "O id do usuario nao é valido"),

    })
})

module.exports = {
    create,
};