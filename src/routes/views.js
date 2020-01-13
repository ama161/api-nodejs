const express = require('express');
const router = express.Router();
const viewsController = require('../controllers/viewsController');

router.get('/', viewsController.getViewHome);

router.get('/contact', viewsController.getViewContact);
router.get('/about', viewsController.getViewUsers);

module.exports = router;