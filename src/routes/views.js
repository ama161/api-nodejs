const express = require('express');
const router = express.Router();
const viewsController = require('../controllers/viewsController');

router.get('/', viewsController.getViewHome);

router.get('/contact', viewsController.getViewContact);

module.exports = router;