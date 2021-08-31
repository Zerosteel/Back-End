//
const express = require('express');
const mongoose = require('mongoose');
const clientesRouter = require ('./routes/clientesRouter');
const inventarioRouter = require('./routes/inventarioRouter');
const piezasRouter = require('./routes/piezasRouter')
const ordenesCRouter = require('./routes/ordenesCRouter')
const requerimientosRouter = require('./routes/requerimientosRouter')
const ordenesTRouter = require('./routes/oTrabajoRouter');

//Creacion de servidor
const app = express()
app.use(express.json())
app.use('/api/clientes',       clientesRouter      )
app.use('/api/inventario',     inventarioRouter    )
app.use('/api/piezas',         piezasRouter        )
app.use('/api/ordenesCompra',  ordenesCRouter      )  
app.use('/api/requerimientos', requerimientosRouter) 
app.use('/api/ordenesTrabajo', ordenesTRouter      )
app.listen(3000,()=> console.log("Servidor Iniciado"));


const url = 'mongodb://localhost/KbManufacturing';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error',(error) => console.error(error));
db.once('open', () => console.log('connectado a la base de datos')); 