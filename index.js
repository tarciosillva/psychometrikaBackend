const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv-safe").config();

const router = require('./src/routes/routes');
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)

app.get('/',(request, response)=>{
    response.send("API NodeJS/MongoDB Psychometrika")
})

app.listen(process.env.PORT,()=>{
    console.log("Servidor rodando na porta: " + process.env.PORT)
})