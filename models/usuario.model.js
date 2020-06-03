const mongoose = require("mongoose");

let usuarioSchema = new mongoose.Schema()
usuarioSchema.add({
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
usuarioSchema.virtual("fullName").get(function(){
    let fullname = `${this.primerNombre} ${this.segundoNombre} ${primerApellido} ${segundoApellido}`
    return fullname
})

let modelo = mongoose.model("usuario", usuarioSchema)

module.exports = modelo