var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-category');

router.get('/:name', ctrl.getCategory);

module.exports = router;