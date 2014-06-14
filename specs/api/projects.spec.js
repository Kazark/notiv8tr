/* jshint expr: true */
describe('The projects API', function() {
    it('should know how to register its own routes', function() {
        var app = {
            post: sinon.spy(),
            get: sinon.spy()
        };

        api.projects.registerRoutes(app);

        expect(app.post.calledOnce).to.be.true;
        expect(app.get.calledOnce).to.be.true;
    });

    describe('when a valid project is created via an HTTP POST', function() {
        var sendSpy;

        beforeEach(function() {
            sendSpy = sinon.spy();
            api.projects.post({ body: {}}, { send: sendSpy });
        });

        it('should respond with 201 Created', function() {
            expect(sendSpy.calledWith(201)).to.be.true;
        });
    });

    describe('when a valid project is requested by ID via an HTTP GET', function() {
        var jsonSpy;

        beforeEach(function() {
            jsonSpy = sinon.spy();
            api.projects.getById(null, { json: jsonSpy });
        });

        it('should respond with 200 OK', function() {
            expect(jsonSpy.calledOnce).to.be.true;
        });
    });
});
