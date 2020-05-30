class HomeController {
    async home(req, res) {
        return res.send({ message: 'Hola Soy home' })
    }

}


module.exports = new HomeController()