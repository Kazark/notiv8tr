/* jshint expr: true */
describe('projects API', function() {
    describe('when a valid project is POSTed', function() {
        var sendSpy;

        beforeEach(function() {
            sendSpy = sinon.spy();
            api.projects.post({ body: {}}, { send: sendSpy });
        });

        it('should respond with 201 Created', function() {
            expect(sendSpy.calledWith(201)).to.be.true;
        });
    });
});
