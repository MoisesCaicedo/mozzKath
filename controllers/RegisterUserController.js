const usuario = require("../models/usuario.model")
const bcrypt = require('bcrypt');
class RegisterUserController {
    async register(req, res) {
        console.log("en registro")
        let body = req.body;
        console.log(body)
        let Usuario = new usuario({
            primerNombre: body.primerNombre,
            segundoNombre: body.segundoNombre,
            primerApellido: body.primerApellido,
            segundoApellido: body.segundoApellido,
            celular: body.Celular,
            email: body.email.trim(),
            password: bcrypt.hashSync(body.password, 10)

        })
        Usuario.save((err, usuarioDb) => {
            if (err) {
                res.json({
                    ok: false,
                    message: err.message
                })
                return
            }

            res.json({
                ok: true,
                message: usuarioDb
            })



        })
    }
}


module.exports = new RegisterUserController();