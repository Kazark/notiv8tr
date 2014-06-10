var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send('You have sucessfully accessed the notiv8tr service prototype');
});

app.listen(3000);
