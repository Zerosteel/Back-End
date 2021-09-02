const mongoose = require('mongoose')

const ordenesCSchema = new mongoose.Schema({
    cliente: {
        type:String,
        required:true
    },
    line:               {
        type:Number,
        required:true
    },
    partNumbers:         {
        //TODO cambiar el typo de unico a uno de tipo arreglo
        type:[Number],
        required:true
    },
    description:        {
        type:String,
        required:true
    },
    deliveryDateTime:   {
	type:String,
	required:true
    },
    quantity:           {
	type:Number,
	required:true
    },
    uom:{
	type:String,
	required:true
    },
    unitPrice:{
	type:Number,
	required:true
    },
    amount:Number  
})

module.exports = mongoose.model('ordenesCompra', ordenesCSchema)
