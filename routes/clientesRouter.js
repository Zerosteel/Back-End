const express = require ('express')
const router = express.Router()
const Clientes = require ( '../models/clientesModel')

router.get('/', async (req,res)=> {
     try {
         const clientes = await Clientes.find()
         res.json(clientes)
     } catch (err) {
        res.status(500).json({message:err.message})         
     }
})

router.get('/:id',getCliente,(req,res)=>{
   res.json(res.cliente)
})

router.post('/', async (req,res) =>{
 const  cliente = new Clientes({
    nombre:req.body.nombre,
    rfc:req.body.rfc,
    direccion:req.body.direccion,
    telefono:req.body.telefono,
    contacto:req.body.contacto,
    correo_contacto:req.body.correo_contacto
 })
 try{
     const newCliente = await cliente.save()
     res.status(201).json(newCliente)
 }catch(err){
     res.status(400).json({message: err.message})
 }
}) 

router.patch('/:id',(req,res)=>{

})

router.delete('/:id', getCliente ,async (req,res)=>{
     
     try {
        await res.cliente.remove()
         res.json({message:'Cliente eliminado de la base de datos'})
     } catch (err) {
         res.status(500).json({message: err.message})
     }
     
})

async function getCliente(req,res,next){
    let cliente
    try {
        cliente = await Clientes.findById(req.params.id)
        if(cliente == null){
            return res.status(404).json({message:'No se encontro el cliente'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    
    res.cliente = cliente
    next()
}

module.exports = router