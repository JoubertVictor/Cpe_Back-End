const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Banco de dados iniciado")
}

module.exports = startDB;