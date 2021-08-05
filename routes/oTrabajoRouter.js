const express = require('express');
const router = express.Router();
const Otrabajo = require('../models/otrabajoModel')
const OCompra = require ('../models/ordenesCModel')
const Piezas = require ('../models/piezasModel')
const fs = require('fs')
const json2xls = require('json2xls')

router.get('/', async (req,res)=>{
    
});

router.post('/', buscarOC, buscarPieza,  async (req,res)=>{

    var json = [{
        foo: 'bar',
        qux: 'moo',
        poo: 123,
        stux: new Date()
    },
    {
        foo: 'bar',
        qux: 'moo',
        poo: 345,
        stux: new Date()
    }]
    
    var xls = json2xls(json);
    
    fs.writeFileSync('data.xlsx', xls, 'binary');
 


console.log("POST OPERATION")
console.log(`el valor de quantity es ${req.quantity}`)
console.log(`el valor de PPB es ${req.ppb}`)

let blanks = Math.ceil(req.quantity/req.ppb)
console.log(blanks)
console.log(`Se ocupan ${blanks} blanks para completar la orden`)
//res.status(201).json("all good!")
res.status(201).json({"blanks":blanks})
//res.json({"blanks":blanks})
})

//OBTENER NUMERO DE PIEZA Y CANTIDAD DE PIEZAS
async function buscarOC(req,res,next){
    let ordenCompra
    const ordId = req.body.ordId
    
    try {
        ordenCompra = await OCompra.findById(ordId)
        if (ordenCompra==null){
            return res.status(404).json({message:"La orden de compra no Existe"})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    
    console.log("Orden de Compra: ", ordenCompra)
    req.piezaNum = ordenCompra.partNumber
    req.quantity = ordenCompra.quantity
    console.log("Numero de Parte: ",req.piezaNum)
    console.log("quantity: ",req.quantity)
    next()
}

//BUSCAS PIEZA OBTENER PPB
 async function buscarPieza(req,res,next){
     console.log("buscandoPieza")
     const piezaNum = req.piezaNum  
     console.log("piezanum:",piezaNum)  
       let miPieza
      const id = "610c306039f6c123f81849ea"

    try {
         miPieza = await Piezas.findOne({piezaNum:piezaNum})
        if(miPieza==null)        {
            console.log("entre a mi pieza null")
            return res.status(404).json({message:"El numero de Parte no Existe"})
        }
    } catch (err) {
        console.log("entre a error")
        return res.status(500).json({message: err.message})
    }
    console.log("Pieza Encontrada!")
     console.log("Los datos de mi pieza",miPieza)
     console.log("Cliente de pieza: ",miPieza.nombreCliente)
    req.ppb = miPieza.ppb
    console.log("EL PPB es:",req.ppb)  
    next()
} 

module.exports = router