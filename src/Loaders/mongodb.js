const mongoose = require("mongoose");

async function startBD() {
    await mongoose.connect('mongodb+srv://joubertsharma:OVSPF7oNtWEjnjE7@cpe.jyj06.mongodb.net/?retryWrites=true&w=majority&appName=Cpe')
}

module.exports = startBD;