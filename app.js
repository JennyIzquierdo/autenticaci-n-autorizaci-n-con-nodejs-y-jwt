const express = require('express')
const app = express()
const cors = require ('cors')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoEquipo= require('./routes/tipoEquipo')
const estadoEquipo= require('./routes/estadoEquipo')
const usuarioEquipo= require('./routes/usuarioEquipo')
const marcaEquipo= require('./routes/marcaEquipo')
const inventarioEquipo = require ('./routes/inventarioEquipo')
const loginUsuario = require ('./routes/auth')

//URI o endpoint 
//middlewares - .use 
app.use('/api/tipoequipos',tipoEquipo)
app.use('/api/estadoequipos',estadoEquipo)
app.use('/api/usuarioequipo',usuarioEquipo)
app.use('/api/marcaequipos',marcaEquipo)
app.use('/api/inventarioequipos',inventarioEquipo)
app.use('/api/loginusuario',loginUsuario)

module.exports = app
