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

        it('should have a project ID', function() {
            expect(project.asJsonForDb().id).to.equal('1000');
        });

        it('should have a URL (HATEOS)', function() {
            expect(project.url('<base-url>')).to.equal('<base-url>/1000');
        });
    });
});
