const config = require("../config/config")
const db = require("./db")
const express = require('express')
const bodyParser = require('body-parser')
const app = express();


const { RegisterUserController, HomeController, SecretController } = require('../routers')

app.use("/static", express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//Rutas
app.use('/', HomeController);
app.use('/register', RegisterUserController);
app.use('/secret', SecretController)


async function main() {
    await app.listen(process.env.PORT)
    console.log("Server running on port: ", process.env.PORT)
    console.log('DB Ok..!')
}

db
    .on('open', () => {
        main()
    })
    .on('erro', () => {
        console.log('Fallo la conexion con DB')
    })

