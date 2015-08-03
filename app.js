var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('pages/home');
});

app.get('/polls', function(req, res) {
   res.render('pages/polls/poll-list');
});

app.listen(app.get('port'), function() {
   console.log('Node app is running on port', app.get('port'));
});