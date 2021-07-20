const mongoose = require ('mongoose')

const piezasSchema = new mongoose.Schema({
    
    NombreInterno:{
        type:String, 
        required:true
    },
    /* Archivo:{
        type:String,
        required:true
    }, */
    Calibre:{
        type:String,
        required:true
    }, 
    Material:{
        type:String,
        required:true
    }, 
    /* Tipo:{
        type:String,
        required:true
    },  */
    PPB:{
        type:Number,
        required:false
    }, 
    /* undefined:{
        type:String,
        required:false
    },  */
    golpesporpieza:{
        type:Number,
        required:false
    }, 
    tiempoestimado:{
        type:Number,
        required:false
    }, 
    PiezaNum:{
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model('Piezas',piezasSchema)
