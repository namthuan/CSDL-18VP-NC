var express = require('express');
var router = express.Router();

const ctrl = require('../controller/products.js');

router.get('/:name', ctrl.getProducts);

module.exports = router;