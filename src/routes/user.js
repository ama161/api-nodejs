const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.post('/new-contact', (req, res) => {
//     console.log(req.body);
//     res.send('received');
// });

router.get("/user", userController.get);

module.exports = router;