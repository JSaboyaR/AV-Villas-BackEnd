const mongoose = require('../db/Database')

const Schema = mongoose.Schema

const UsuariosSchema = new Schema({
    nombre: String,
    tipoDoc: String,
    numDoc: String,
    fecNac: String,
    fecExp: String,
    correo: String,
    direccion: String,
    ciudad: String,
    password:String,
    rol:String,
    estado:String
})

const Usuarios = mongoose.model('usuarios', UsuariosSchema)

module.exports = Usuarios