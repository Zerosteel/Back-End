const express = require('express')
const router = express.Router()
const Inventario = require('../models/InventarioModel')

router.get('/', async (req,res) => {
    
    try {
        const inventario = await Inventario.find()
        res.json( inventario)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
    
})

router.post('/', async (req,res) =>{
    
    const inventario = new Inventario({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        cantidad:req.body.cantidad,
	    material:req.body.material
    })

    try {
        
        const newInventario = await inventario.save()
        res.status(201).json(newInventario)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

module.exports = router