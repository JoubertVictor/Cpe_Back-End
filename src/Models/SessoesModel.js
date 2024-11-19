const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SesoesSchema = new Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    }
}, {
    timestamps: true
})

const SesoesModel = mongoose.model('sessoes', SesoesSchema);

module.exports = SesoesModel;