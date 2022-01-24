const router = require("express").Router();
const auth = require("../middleware/auth");
const blogController = require('../Controllers/Blog')

router.post("/create", auth,blogController.createBlog );

router.get('/', auth, blogController.getAll)

router.get('/:title', auth, blogController.getByTitle)

router.delete('/:title', auth, blogController.deleteByTitle)


module.exports = router;
