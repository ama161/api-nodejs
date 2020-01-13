const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get("/user", userController.getUsers);
router.post('/new-contact', userController.newUser);

module.exports = router;