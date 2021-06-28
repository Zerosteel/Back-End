const mongoose = require ('mongoose')

const clientesSchema = new mongoose.Schema({
    nombre:{
        type:String, 
        required:true
    },
    rfc:{
        type:String,
        required:true
    },
    direccion:String
})

module.exports = mongoose.model('Clientes',clientesSchema)
