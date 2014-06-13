var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.send('You have sucessfully accessed the notiv8tr service prototype');
});

api.registerRoutes(app);

app.listen(port);
