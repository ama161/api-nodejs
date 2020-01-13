const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post('/new-contact', userController.newUser);
router.get('/delete/:id', userController.deleteUser);
// router.post('/update/:id', userController.editUser);

module.exports = router;