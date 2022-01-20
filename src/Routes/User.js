const Express = require('express')
const router = Express.Router();
const userController = require('../Controllers/User')


router.get('/', userController.getAll)

router.get('/:userName', userController.getSingleUser)

router.post('/signup', userController.signup)

router.post('/login', userController.userLogin)

router.delete('/delete', userController.deleteAccount)

module.exports = router;
