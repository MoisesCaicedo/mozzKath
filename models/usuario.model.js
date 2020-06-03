const mongoose = require("mongoose");

let usuario = new mongoose.Schema()
usuario.add({
    primerNombre: { type: String, required: [true,"Campo nombre obligatorio"] },
    segundoNombre: { type: String, required: false },
    primerApellido: { type: String, required: [true,"Primer Apellido obligatorio"] },
    segundoApellido: { type: String, required: [true,"Segundo apellido obligatorio"] },
    NumeroCelular: { type: Number, required: false },
    email: { type: String, required: [true,"Email obligatorio"] },
    password: { type: String, required: true ,min:[8,"Minimo 8 caracteres"]},
    fechaNacimiento: { type: Date,
                     required: [true,"Fecha nacimiento obligatoria"],
                     max:[new Date,`Fecha maxima hoy ${new Date}`]
                     },
    activo: { type: Boolean, default: true }
}
)
a = () => {
    console.log(mongoose.Types)
}
let modelo = mongoose.model("usuario", usuario,)

module.exports = modelo