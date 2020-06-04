class Secret {
    async secret(req, res) {
        res.send("estas en secreto")
    }
}
module.exports = new Secret()