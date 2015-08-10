var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
   res.render('pages/polls/poll-list');
});

router.get('/about', function(req, res) {
   res.render('pages/polls/about');
});

router.get('/create', function(req, res) {
   res.render('pages/polls/poll-create');
});

module.exports = router;
