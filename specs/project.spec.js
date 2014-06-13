/* jshint expr: true */
describe('project', function() {
    var project;
    describe('created from a name and user ID', function() {
        var projectParams = {
            creatorUserID: 0,
            projectName: "Biblical Theology"
        };

        beforeEach(function() {
            project = api.createProject().fromPost(projectParams);
        });

        it('should have that name and user ID', function() {
            project = project.asJsonForDb();
            expect(project.name).to.equal(projectParams.projectName);
            expect(project.creatorUserID).to.equal(projectParams.creatorUserID);
        });

        it('should have a project ID', function() {
            expect(project.asJsonForDb().id).to.equal('1000');
        });

        it('should have a URL (HATEOS)', function() {
            expect(project.url()).to.equal('http://localhost:3000/api/projects/1000');
        });
    });
});
