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

rutas.get('/get_cuentas', async (req, res) => {
    res.json(await cuentas())
})

rutas.get('/get_quejas', async (req, res) => {
    res.json(await quejas())
})

rutas.get('/get_solicitudes', async (req, res) => {
    res.json(await solicitudes())
})

rutas.get('/get_transacciones', async (req, res) => {
    res.json(await transacciones())
})


module.exports = rutas