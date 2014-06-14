/* jshint expr: true */
describe('project', function() {
    var project;
    describe('created from a name and user ID', function() {
        var projectParams = {
            creatorUserID: 0,
            projectName: "Biblical Theology"
        };

        beforeEach(function() {
            project = domain.createProject().fromPost(projectParams);
        });

        it('should have that name and user ID', function() {
            project = project.asJsonForDb();
            expect(project.name).to.equal(projectParams.projectName);
            expect(project.creatorUserID).to.equal(projectParams.creatorUserID);
        });

        it('should have a project ID based on the user ID', function() {
            expect(project.asJsonForDb().id).to.equal('0-1000');
        });

        it('should be able to format its URI given a base URL', function() {
            expect(project.url('<base-url>')).to.equal('<base-url>/0-1000');
        });
    });
});
