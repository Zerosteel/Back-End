const express = require('express');
const router = express.Router();
const Otrabajo = require('../models/otrabajoModel')
const OCompra = require ('../models/ordenesCModel')
const Piezas = require ('../models/piezasModel')

router.get('/', async (req,res)=>{
    
});

router.post('/', buscarOC, buscarPieza,  async (req,res)=>{

//TODO de la orden de compra obtener el cliente, las piezas, y la cantidad de cada pieza
//TODO para cada pieza buscar su PPB ,material, calibre y tipo 
//TODO 

console.log(`el valor de quantity es ${req.quantity}`)
console.log(`el valor de PPB es ${req.PPB}`)

let blanks = req.quantity/req.PPB
console.log(blanks)
console.log(`Se ocupan ${blanks} para completar la orden`)
res.status(201).json("all good!")
})


async function buscarOC(req,res,next){
    let ordenCompra
    console.log(req.body.ordId)
    /* const ordId = req.body.ordId */
    const ordId = "60fefc65f65b933e5cfb3c97"
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

 async function buscarPieza(req,res,next){
     console.log("buscandoPieza")
     const piezaNum = req.piezaNum  
     console.log("piezanum:",piezaNum)  
       let miPieza
      const id = "60df83b7c3d90f2f65700e99"
    try {
         miPieza = await Piezas.findById(id)
        if(miPieza==null){
            console.log("entre a mi pieza null")
            return res.status(404).json({message:"El numero de Parte no Existe"})
        }
    } catch (err) {
        console.log("entre a error")
        return res.status(500).json({message: err.message})
    }
    
     console.log("Los datos de mi pieza",miPieza)
    /*req.PPB = miPieza.PPB
    console.log("EL PPB es:",req.PPB)  */
    next()
} 

module.exports = router

