const router = require("express").Router()
const  { SecretController } = require("../controllers")


router.all('/',SecretController.secret)

module.exports = router