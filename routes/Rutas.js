const express = require('express')

const Usuario = require('../models/Usurios')
const Cuenta = require('../models/Cuentas')
const Queja = require('../models/Quejas')
const Solicitud = require('../models/Solicitudes')
const Transaccion = require('../models/Transacciones')

const rutas = express.Router()

const usuarios = async () => {
    const usuarios = await Usuario.find()
    return usuarios
}

const cuentas = async () => {
    const cuentas = await Cuenta.find()
    return cuentas
}

const quejas = async () => {
    const quejas = await Queja.find()
    return quejas
}

const solicitudes = async () => {
    const solicitudes = await Solicitud.find()
    return solicitudes
}

const transacciones = async () => {
    const transacciones = await Transaccion.find()
    return transacciones
}


rutas.get('/get_usuarios', async (req, res) => {
    res.json(await usuarios())
})

rutas.get('/get_usuarios/:dni_usuario', async (req, res) => {
    const dni_usuario = req.params.dni_usuario
    const usuario = await Usuario.findById(dni_usuario)

    res.json(usuario)
})

rutas.delete('/eliminar_usuario/:dni_usuario', async (req, res) => {
    let usuario = Usuario.findById(req.params.id)

    await usuario.deleteOne()

    res.json({mensaje: "Usuario interno eliminado correctamente"})
})

rutas.get('/get_cuentas', async (req, res) => {
    res.json(await cuentas())
})

rutas.get('/get_cuentas/:num_cuenta', async (req, res) => {
    const num_cuenta = req.params.num_cuenta
    const cuenta = await Cuenta.findById(num_cuenta)

    res.json(cuenta)
})

rutas.post('/crear_cuenta', async (req, res) => {
    let cuenta = new Cuenta(req.body)
    await cuenta.save()

    res.json({mensaje: "Cuenta creada exitosamente"})
})

rutas.delete('/eliminar_cuenta/:num_cuenta', async (req, res) => {
    let cuenta = Cuenta.findById(req.params.id)

    await cuenta.deleteOne()

    res.json({mensaje: "cuenta eliminada correctamente"})
})

rutas.get('/get_quejas', async (req, res) => {
    res.json(await quejas())
})

rutas.get('/get_solicitudes', async (req, res) => {
    res.json(await solicitudes())
})

rutas.post('/crear_solicitud', async (req, res) => {
    let solicitud = new Solicitud(req.body)
    await solicitud.save()

    res.json({mensaje: "Solicitud creada exitosamente"})
})

rutas.get('/get_transacciones', async (req, res) => {
    res.json(await transacciones())
})


module.exports = rutas