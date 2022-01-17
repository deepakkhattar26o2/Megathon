const Express = require('express')
const router = Express.Router();
const userController = require('../Controllers/User')
const User = require('../Models/User')
const bcr = require('bcrypt')
const jwt = require("jsonwebtoken")

router.post('/signup', userController.signup)

router.delete('/delete', userController.deleteAccount)

router.get('/:userName', userController.getSingleUser)

router.post('/login', userController.userLogin)

module.exports = router;
