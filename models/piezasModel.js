const mongoose = require ('mongoose')

 const piezasSchema = new mongoose.Schema({
    
    nombreInterno:{
        type:String,
        required:false
    },
    archivo:{
        type:String,
        required:false
    }, 
    
    calibre:{
        type:String,
        required:true
    }, 
    material:{
        type:String,
        required:true
    }, 
    tipo:{
        type:String,
        required:false
    },  
    ppb:{
        type:Number,
        required:false
    }, 
    blankSize:{
        type:String,
        required:false
    },  
    golpesPorPieza:{
        type:Number,
        required:false
    }, 
    tiempoEstimado:{
        type:Number,
        required:false
    }, 
    piezaNum:{
        type:Number,
        required:true
    } 
    
})
 



module.exports = mongoose.model('piezas',piezasSchema)
