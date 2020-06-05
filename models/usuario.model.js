const mongoose = require("mongoose");
let usuarioSchema = new mongoose.Schema();
const uniqueValidator = require('mongoose-unique-validator');

const email = {
    type: String,
    required: [true, "{PATCH} obligatorio"],
    unique: [true, "{PATCH} ya se encuentra"],
    lowercase: true,
    uniqueCaseInsensitive: true,
    trim: true

}


usuarioSchema.add({
    primerNombre: { type: String, required: [true, "{PATH} es requerido"] },
    segundoNombre: { type: String, required: false },
    primerApellido: { type: String, required: [true, "{PATH} Apellido obligatorio"] },
    segundoApellido: { type: String, required: [true, "Segundo apellido obligatorio"] },
    celular: { type: Number, required: false, trim: true, min: [3000000000], max: [3999999999] },
    email: email,
    password: { type: String, required: true, min: [8, "Minimo 8 caracteres"] },
    // fechaNacimiento: {
    //     type: Date,
    //     required: [true, "Fecha nacimiento obligatoria"],
    //     max: [new Date, `Fecha maxima hoy ${new Date}`]
    // },
    activo: { type: Boolean, default: true }
}
)
const validadorMail = function (cadena) {
    let validaciones = require('../general').validaciones
    return validaciones.email(cadena)
}
usuarioSchema.path('email').validate(validadorMail,
    '{VALUE} no es email valido',
    'Invalid Email')
usuarioSchema.methods.toJSON = function () {
    let user = this;
    let userObjet = user.toObject();
    delete userObjet.password;
    return userObjet;
}
usuarioSchema.plugin(uniqueValidator, { message: `El {PATH} : {VALUE} ya existe..` });
usuarioSchema.virtual("fullName").get(function () {
    let fullname = `${this.primerNombre} ${this.segundoNombre} ${primerApellido} ${segundoApellido}`
    return fullname
})
let modelo = mongoose.model("usuario", usuarioSchema)
module.exports = modelo