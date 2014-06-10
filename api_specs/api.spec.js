var request = require('request');
var assert = require('assert');

request('http://localhost:3000/', function(error, response, body) {
    assert(!error && response.statusCode === 200,
           "GET request to application root should return status code 200 OK");
});
