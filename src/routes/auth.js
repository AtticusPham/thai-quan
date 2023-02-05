const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require("../middlewares/middlewares");
const { signup, login, forgotPassword } = require('../controllers/auth');


/**POST /signup to create a new account */
router.post("/signup", asyncErrorHandler(signup));

/**POST /login login */
router.post("/login", asyncErrorHandler(login));

//forgot password
router.post("/forgot", asyncErrorHandler(forgotPassword));


module.exports = router

