const express = require("express");
const router = express.Router();
const hackathonController = require('../Controllers/Hackathon')
const auth = require('../middleware/check-auth')

router.post("/create", auth, hackathonController.createOne);

router.get('/', hackathonController.getAll);

router.get('/:name', hackathonController.getOnes)

router.patch('/update/:name', auth, hackathonController.updateOne)

router.delete('/delete/', auth, hackathonController.deleteOne)

module.exports = router;
