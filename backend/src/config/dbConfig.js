const mongoose = require("mongoose");

const dbConfig = "mongodb://0.0.0.0:27017/time";

const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;