const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuarios = require('../models/Usuarios')

const rutas = express.Router()

rutas.post('/crearUsuario', async (req, res) => {
    let datosusuario = req.body

    let salt = await bcrypt.genSalt(10)
    let password = await bcrypt.hash(datosusuario.pass, salt)

    datosusuario = {
        ...datosusuario,
        password: password
    }

    let usuarios = new Usuarios(datosusuario)
    await usuarios.save()

    res.json({mensaje: "usuario creado"})
})

module.exports = rutas