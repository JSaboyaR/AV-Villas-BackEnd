const mongoose = require('../db/Database')

const Schema = mongoose.Schema

const TransaccionesSchema = new Schema({
    cuentaOrigen: String,
    estado: String,
    sucursal: String,
    cuentaDestino: String,
    valor: Number,
    cobro: Number,
    descripcion: String,
    hora: String,
    fecha: String
})

const Transacciones = mongoose.model('transacciones', TransaccionesSchema)

module.exports = Transacciones