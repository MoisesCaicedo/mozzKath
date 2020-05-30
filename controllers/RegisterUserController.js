class RegisterUserController {
    async register(req, res) {
        return res.send({ message: 'hello ResgistroUserControles' })
    }

}

module.exports = new RegisterUserController();