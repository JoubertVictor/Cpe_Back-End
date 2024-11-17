const startBD = require("./mongodb");

class Loaders{
    start(){
        startBD();
    }
}

module.exports = new Loaders();