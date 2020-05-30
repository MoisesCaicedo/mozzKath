const router = require("express").Router();
const { RegisterUserController } = require("../controllers");

router.get('/register', RegisterUserController.register);


module.exports = router