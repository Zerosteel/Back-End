//
const express = require('express');
const mongoose = require('mongoose');
const clientesRouter = require ('./routes/clientesRouter');
const inventarioRouter = require('./routes/inventarioRouter')


//Creacion de servidor
const app = express()
app.use(express.json())
app.use('/clientes', clientesRouter)
app.use('/inventario',inventarioRouter)
app.listen(3000,()=> console.log("Servidor Iniciado"));

//Connexion a la base de datos
const url = 'mongodb://localhost/KbManufacturing';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open', () => console.log('connectado a la base de datos'));





