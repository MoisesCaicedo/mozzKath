const config = require("../config/config")
const db = require("./db")
const express = require('express')
const app = express();


const { RegisterUserController, HomeController,SecretController } = require('../routers')

app.use(express.static('../public'));
app.use(express.json());
//Rutas
app.use('/', HomeController);
app.use('/register', RegisterUserController);
app.use('/secret',SecretController)


main()
async function main() {
    await app.listen(process.env.PORT)
    console.log("Server running on port: ", process.env.PORT)
    console.log(require('../models/usuario.model'))
    console.log()
}

