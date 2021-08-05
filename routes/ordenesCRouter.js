const express = require('express')
const router = express.Router()
const OrdenesDeCompra= require('../models/ordenesCModel')

router.get('/', async (req,res) => {
    
    try {
        const ordenesC= await OrdenesDeCompra.find()
        res.json(ordenesC)
        console.log(ordenesC)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
    
})

router.post('/', async (req,res) =>{
    //TODO editarlo para que en lugar de una pieza por orden de compra sea un arreglo
    const ordenesDeCompra= new OrdenesDeCompra({
        line:             req.body.line,
        partNumber:       req.body.partNumber,
        description:      req.body.description,
        deliveryDateTime: req.body.deliveryDateTime,
        quantity:         req.body.quantity,
        uom:              req.body.uom,
        unitPrice:        req.body.unitPrice,
        amount:           req.body.amount 
    })

    try {
        const newOrdenesC = await ordenesDeCompra.save()
        res.status(201).json(newOrdenesC)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

module.exports = router