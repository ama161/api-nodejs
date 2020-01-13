const express = require('express');
const router = express.Router();

// views
router.use(require('./views'));

// api user
router.use(require('./user'));

module.exports = router;
