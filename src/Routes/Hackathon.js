const express = require("express");
const router = express.Router();
const hackathonController = require('../Controllers/Hackathon')
const auth = require('../middleware/auth')

router.post("/create", auth, hackathonController.createOne);

router.get('/', auth, hackathonController.getAll);

router.delete('/delete/', auth, hackathonController.deleteOne)

module.exports = router;
