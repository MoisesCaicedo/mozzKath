const usuario = require("../models/usuario.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class RegisterUserController {

    async register(req, res) {
        console.log("en registro")
        let body = req.body;
        if (!body.passwordConfirm) {
            return res.json({
                ok: false,
                message: 'Falta contraseña validación'
            })
        } else {
            if (!(body.password === body.passwordConfirm)) {
                return res.json({
                    ok: false,
                    message: 'Contraseñas no coinciden'
                })
            }
        }
        // console.log(body)
        // try {
        //     const dbUsuarion = await usuario.create(body)
        //     return res.json({
        //         ok: true,
        //         message: dbUsuarion
        //     })
        // } catch (error) {
        //     return res.json({
        //         ok: false,
        //         message: error
        //     })
        // }

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
                return res.json({
                    ok: false,
                    message: err.message
                })
            }

            return res.json({
                ok: true,
                message: usuarioDb,
                token: jwt.sign({ usuario: usuarioDb },
                    process.env.SEED,
                    { expiresIn: 60 * 60 * 24 * 5 }) /* 5 dias */
            })
        })
    }
}




module.exports = new RegisterUserController();