var PORT = 8080;

var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    expressValidator = require('express-validator');

//Include routes and controllers
routes = require('./routes.js');


//Create Express App
var app = express();

//Parse Input as JSON
app.use(bodyParser.json({ extended: true }));

app.use(cors());


//Setup Routes
app.use('/', routes);

var server = app.listen(PORT, function() {
    // console.log(server.address().address);
    console.log('UniBlog started on port ' + PORT);
});
module.exports = server;