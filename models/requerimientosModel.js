const mongoose = require('mongoose')

const requerimientoSchema = new mongoose.Schema({
    area: {type:String,required:true},
    descripcion:{type:String,required:true},
    cantidad:{type:Number,required:true},    
})

module.exports = mongoose.model('Requerimiento',requerimientoSchema)
/* acero espesor */