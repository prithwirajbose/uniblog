var routes = require('express').Router();
var _ = require('./lib/lodash.min.js');

routes.get('/api/*', function(req, res) {
    res.contentType('application/json').status(200).json({ name: 'hello' });
});

routes.post('/api/*', function(req, res) {

});

routes.get('/*', function(req, res) {
    var url = req.originalUrl;
    if (!_.isNil(url) && url == '/')
        url = '/index.html';
    res.sendFile(__dirname + '/web' + url);
});

routes.post('/*', function(req, res) {
    var url = req.originalUrl;
    if (!_.isNil(url) && url == '/')
        url = '/index.html';
    res.sendFile(__dirname + '/web' + url);
});


module.exports = routes;