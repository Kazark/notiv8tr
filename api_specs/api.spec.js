/* jshint expr: true */
var spawn = require('child_process').spawn;
var request = require('request-json');
var chai = require('chai');
var expect = chai.expect;

describe('notiv8tr HTTP API', function() {
    var service;
    var client;
    before(function(done) {
        service = spawn('node', ['./build/notiv8tr.js']);
        setTimeout(done, 500); // Give the service half a second to get itself going

        client = request.newClient('http://localhost:3000/');
    });

    describe('GET request to application root', function() {
        var response;

        beforeEach(function(done) {
            client.get('/', function(error, resp) {
                response = resp;
                done();
            });
        });

        it('should return status code 200 OK', function() {
            expect(response.statusCode).to.equal(200);
        });
    });

    describe('When I create a project by sending a POST request to api/projects', function() {
        var postBody;
        var projectName = 'Exercising';

        beforeEach(function(done) {
            client.post('api/projects', {
                "projectName": projectName
            }, function(error, response, body) {
                expect(error).not.to.be.ok;
                postBody = body;
                done();
            });
        });

        describe('then a GET request to the URL returned from the POST', function() {
            var statusCode;
            var project;

            beforeEach(function(done) {
                client.get(postBody.url, function(error, response, body) {
                    expect(error).not.to.be.ok;
                    statusCode = response.statusCode;
                    project = body;
                    done();
                });
            });

            it('should return the project', function() {
                expect(statusCode).to.equal(200);
                expect(project.projectName).to.equal(projectName);
            });
        });
    });

    after(function() {
        service.kill('SIGINT');
    });
});
