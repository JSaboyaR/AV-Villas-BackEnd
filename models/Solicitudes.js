const mongoose = require('../db/Database')

const Schema = mongoose.Schema

const SolicitudesSchema = new Schema({
    usuarioExt: String,
    usuarioInt: String,
    nSolicitud: String,
    motivo: String,
    descripcion: String,
    estado: String
})

const Solicitudes = mongoose.model('solicitudes', SolicitudesSchema)

module.exports = Solicitudes