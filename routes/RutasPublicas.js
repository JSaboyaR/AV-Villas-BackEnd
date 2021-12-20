const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuario = require('../models/Usuario')

const rutas = express.Router()


module.exports = rutas