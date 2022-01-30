const Express = require("express");
const router = Express.Router();
const auth = require('../middleware/check-auth')
const userController = require("../Controllers/User");

router.get("/", auth, userController.getAll);

router.get("/:userName",auth,  userController.getSingleUser);

router.post("/signup", userController.signup);

router.post("/login", userController.userLogin);

router.delete("/delete",auth,  userController.deleteAccount);

router.patch("/:name", auth, userController.updateProfile);

module.exports = router;
