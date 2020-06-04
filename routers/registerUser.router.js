const router = require("express").Router();
const { RegisterUserController } = require("../controllers");

router.post('/', RegisterUserController.register);


module.exports = router