const express = require('express')
const cors = require('cors')

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.json({
        mensaje:"Hola"
    })
})

app.listen(port, () => {console.log("Servidor activado");})