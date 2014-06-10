/* jshint expr: true */
var http = require('q-io/http');
var chai = require('chai');
var expect = chai.expect;

describe('notiv8tr HTTP API', function() {
    describe('GET request to application root', function() {
        var response;

        beforeEach(function(done) {
            http.request({
                method: 'GET',
                url: 'http://localhost:3000/',
            }).then(function(r) {
                response = r;
                done();
            });
        });

        it('should return status code 200 OK', function() {
            expect(response.status).to.equal(200);
        });
    });
});
