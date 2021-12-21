const express = require('express')

const Usuarios = require('../models/Usuarios')
const Cuentas = require('../models/Cuentas')
const Quejas = require('../models/Quejas')
const Solicitudes = require('../models/Solicitudes')
const Transacciones = require('../models/Transacciones')

const rutas = express.Router()

module.exports = rutas