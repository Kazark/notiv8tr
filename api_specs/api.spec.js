/* jshint expr: true */
var spawn = require('child_process').spawn;
var http = require('q-io/http');
var chai = require('chai');
var expect = chai.expect;
var BASE_URL = 'http://localhost:3000/';

describe('notiv8tr HTTP API', function() {
    var service;
    before(function(done) {
        service = spawn('node', ['./build/notiv8tr.js']);
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

    describe('When I create a project by sending a POST request to api/projects', function() {
        var postResponse;
        var projectName = 'Exercising';

        beforeEach(function(done) {
            http.request({
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                url: BASE_URL + 'api/projects',
                body: [JSON.stringify({
                    projectName: projectName
                })]
            }).then(function(r) {
                postResponse = r;
                done();
            });
        });

        describe('then a GET request to the URL returned from the POST', function() {
            var status;
            var body;

            beforeEach(function(done) {
                http.request({
                    method: 'GET',
                    url: postResponse.body.url
                }).then(function(response) {
                    status = response.status;
                    return response.body.read();
                }).then(function(rawBody) {
                    body = JSON.parse(rawBody);
                    done();
                });
            });

            it('should return the project', function() {
                expect(status).to.equal(200);
                expect(body.projectName).to.equal(projectName);
            });
        });
    });

    after(function() {
        service.kill('SIGINT');
    });
});
