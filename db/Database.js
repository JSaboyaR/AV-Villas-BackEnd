const mongoose = require("mongoose");

const usuarioDB = process.env.USUARIODB
const passwordDB = process.env.PASSWORDDB
const nombreDB = process.env.NOMBREDB

const uri_bd = `mongodb+srv://${usuarioDB}:${passwordDB}@servidor.5mzjh.mongodb.net/${nombreDB}?retryWrites=true&w=majority`

mongoose
  .connect(uri_bd)
  .then(() => console.log("Conectado a la MongoDB"))
  .catch((e) => {
    console.log("Error DB: ", e);
  });

module.exports = mongoose