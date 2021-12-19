const mongoose = require('../db/Database')

const Schema = mongoose.Schema

const CuentasSchema = new Schema({
    numCuenta: String,
    estadoCuenta: String,
    saldoCuenta: String,
    titular: String,
    
})

const Cuentas = mongoose.model('cuentas', CuentasSchema)

module.exports = Cuentas