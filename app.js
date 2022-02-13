require('dotenv').config()
const express = require('express');
const path = require('path')

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(require('./routes/envio_email'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})  

