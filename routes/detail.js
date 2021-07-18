var express = require('express');
var router = express.Router();

const ctrl = require('../controller/home.js');

router.get('/', ctrl.getHome);

module.exports = router;