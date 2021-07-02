const mongoose = require('mongoose')

const inventarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Inventario', inventarioSchema)
