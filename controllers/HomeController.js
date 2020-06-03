class HomeController {
    async home(req, res) {
        console.log("en home")
        return res.send({ message: 'Hola Soy home' })
    }

}


module.exports = new HomeController()