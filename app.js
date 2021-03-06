var express = require('express');
var app = express();
var router = express.Router();
// var mongoose = require('mongoose');
//
// var dbString = process.env.MONGOLAB_URI;
// mongoose.connect(dbString, function (err, res) {
//   if (err) {
//   console.log ('ERROR connecting to: ' + dbString + '. ' + err);
//   } else {
//   console.log ('Succeeded connected to: ' + dbString);
//   }
// });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var home = require('./routes/index');
app.use('/', home);
var polls = require('./routes/polls');
app.use('/polls', polls);

app.listen(app.get('port'), function() {
   console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
