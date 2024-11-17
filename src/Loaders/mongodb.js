const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect('mongodb+srv://joubertsharma:OVSPF7oNtWEjnjE7@backend.jyj06.mongodb.net/?retryWrites=true&w=majority&appName=Backend')
}

module.exports = startDB;