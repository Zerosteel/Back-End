const express = require ('express')
const router = express.Router()
const Requerimientos = require('../models/requerimientosModel')

router.get('/', async (req,res)=>{
    try {
        const requerimiento = await Requerimientos.find()        
        res.json(requerimiento)
    } catch (error) {
        res.status(500).json({message:err.message})
    }
    
})

router.post('/', async (req,res)=>{
    const requerimiento = new Requerimientos({
        area        : req.body.area,
        descripcion : req.body.descripcion,
        cantidad    : req.body.cantidad  
    })
    try {
        const newRequerimiento = await requerimiento.save()
        res.status(201).json(newRequerimiento)
    } catch (error) {
        res.status(400).json({message: err.message})
    }
})


module.exports = router
