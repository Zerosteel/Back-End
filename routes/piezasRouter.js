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

module.exports = router