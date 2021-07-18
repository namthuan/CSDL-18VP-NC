var express = require('express');
var router = express.Router();

const ctrl = require('../controller/payment.js');

router.get('/', ctrl.getPayment);

module.exports = router;