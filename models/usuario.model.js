const mongoose = require("mongoose");


let usuario = new mongoose.Schema()
usuario.add({
    _id: { type: Number, default: 2172 },
    primerNombre: { type: String, required: true },
    segundoNombre: { type: String, required: false },
    primerApellido: { type: String, required: true },
    segundoApellido: { type: String, required: true },
    NumeroCelular: { type: Number, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    activo: { type: Boolean, default: true }
}
)
a = () => {
    console.log(mongoose.Types)
}
module.exports = mongoose.model("usuario", usuario)