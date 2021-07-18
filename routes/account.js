var express = require('express');
var router = express.Router();

const ctrl = require('../controller/account.js');

router.get('/:name', ctrl.getAccount);
/*
router.get('/:name', function(req, res){
    res.render('./account/account', {person: req.params.name});
}); 
*/

module.exports = router;