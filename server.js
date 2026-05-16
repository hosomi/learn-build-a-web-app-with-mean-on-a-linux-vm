var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var app = express();
app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
require('./app/routes')(app);
app.set('port', 80);
app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});