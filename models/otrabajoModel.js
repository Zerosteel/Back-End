const mongoose = require ('mongoose')

const oTrabajoModel = new mongoose.Schema({
    cliente:  String,
    pieza:    Number,
    cantidad: Number
})