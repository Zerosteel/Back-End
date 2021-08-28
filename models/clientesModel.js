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
    direccion:{
        type:String,
        required:true
    }, 
    telefono:{
        type:String,
        required:true
    }, 
    contacto:{
        type:String,
        required:true
    }, 
    correo_contacto:String
})

module.exports = mongoose.model('Clientes',clientesSchema)
