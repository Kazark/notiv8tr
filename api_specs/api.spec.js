/* jshint expr: true */
var spawn = require('child_process').spawn;
var http = require('q-io/http');
var chai = require('chai');
var expect = chai.expect;
var BASE_URL = 'http://localhost:3000/';

describe('notiv8tr HTTP API', function() {
    var service;
    before(function(done) {
        service = spawn('node', ['./src/notiv8tr.js']);
        setTimeout(done, 500); // Give the service half a second to get itself going
    });

    describe('GET request to application root', function() {
        var response;

        beforeEach(function(done) {
            http.request({
                method: 'GET',
                url: BASE_URL,
            }).then(function(r) {
                response = r;
                done();
            });
        });

        it('should return status code 200 OK', function() {
            expect(response.status).to.equal(200);
        });
    });

    describe('POST request to api/projects', function() {
        var response;

        beforeEach(function(done) {
            http.request({
                method: 'POST',
                url: BASE_URL + 'api/projects',
                body: [JSON.stringify({
                    projectName: 'Exercising'
                })]
            }).then(function(r) {
                response = r;
                done();
            });
        });

        it('should create a project', function() {
            expect(response.status).to.equal(201);
        });
    });

    after(function() {
        service.kill('SIGINT');
    });
});
