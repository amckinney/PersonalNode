var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
   res.render('pages/home');
});

router.get('/resume', function(req, res) {
   res.render('pages/resume');
});

module.exports = router;
