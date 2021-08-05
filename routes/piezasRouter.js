const express = require ('express')
const router = express.Router()
const Piezas = require ('../models/piezasModel')

router.get('/', async (req,res) => {
    
    try {
        const piezas = await Piezas.find();
        res.json(piezas);
    } catch ( err) {
        res.status(500).json({message:err.message})
    }

})

router.post('/', async (req,res)=>{
    const pieza = new Piezas({
        nombreCliente : req.body.nombreCliente,
        piezaNum      : req.body.piezaNum,
        ppb           : req.body.ppb
    })
    try {
        const newPieza = await pieza.save()
        res.status(201).json(pieza)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

module.exports = router