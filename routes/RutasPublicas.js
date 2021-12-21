const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuarios = require('../models/Usuarios')

const rutas = express.Router()

rutas.post('/crear_usuairo', async (req, res) => {
    let datos_usuario = req.body

    let salt = await bcrypt.genSalt(10)
    let password = await bcrypt.hash(datos_usuario.pass, salt)

    datos_usuario = {
        ...datos_usuario,
        pass: password
    }

    let usuario = new Usuario(datos_usuario)
    await usuario.save()

    res.json({mensaje: "usuario creado correctamente"})
})

rutas.post('/login', async (req, res) => {

    let usuario = req.body.usuario

    let usuario_bd = await Usuario.findOne({usuario: usuario})

    if (!usuario_bd) {
        return res.json({
            mensaje: 'el usuario no exite'
        })
    } else {
        let password = req.body.pass

        let validar_password = await bcrypt.compare(password, usuario_bd.pass)

        if (!validar_password) {
            return res.json({
                mensaje: 'clave invalida'
            })
        }
    }

    token = jwt.sign({
        id: usuario_bd._id,
        usuario: usuario_bd.usuario
    }, process.env.SECRETO_JWT)

    return res.json({
        mensaje: 'Bienvenido',
        usuario: usuario_bd,
        token
    })

})

module.exports = rutas