const mongoose = require('../db/Database')

const Schema = mongoose.Schema

const QuejasSchema = new Schema({
    nQueja: String,
    usuarioExt: String,
    usuarioInt: String,
    motivo: String,
    descripcion: String,
    nTransaccion: String,
    nCuentaOrig: String,
    nCuentaDest: String,
    valor:String,
    estado:String
})

const Quejas = mongoose.model('quejas', QuejasSchema)

module.exports = Quejas