const mongoose = require("mongoose");

const usuarioDB = 'equipo1'
const passwordDB = 'MisionTic2020'
const nombreDB = 'DataBase'


const uri_bd = `mongodb+srv://${usuarioDB}:${passwordDB}@proyectoavvillas.8pohc.mongodb.net/${nombreDB}?retryWrites=true&w=majority`

mongoose
  .connect(uri_bd)
  .then(() => console.log("Conectado a la MongoDB"))
  .catch((e) => {
    console.log("Error DB: ", e);
  });

module.exports = mongoose

