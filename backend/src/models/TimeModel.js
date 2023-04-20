const mongoose = require("mongoose");

const TimeModelSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    time: String,
});

module.exports = mongoose.model("Time", TimeModelSchema);