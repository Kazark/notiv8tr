var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('You have sucessfully accessed the notiv8tr service prototype');
});

app.post('/api/projects', function(request, response) {
    response.status(201).send(request.body);
});

app.get('/api/projects/:id', function(request, response) {
    response.send('TODO');
});

app.listen(3000);
