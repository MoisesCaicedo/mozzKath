const router = require("express").Router();
const { RegisterUserController } = require("../controllers");

router.post('/register', RegisterUserController.register);


module.exports = router