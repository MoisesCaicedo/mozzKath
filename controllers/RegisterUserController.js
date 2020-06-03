class RegisterUserController {

    async register(req, res) {
        console.log("en registro")
        return res.send({ message: 'Hola soy ResgistroUserControles' })
    }





}

module.exports = new RegisterUserController();