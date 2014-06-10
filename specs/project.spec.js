/* jshint expr: true */
describe('project', function() {
    var project;
    describe('created from a name and user ID', function() {
        var projectParams = {
            creatorUserID: 0,
            projectName: "Biblical Theology"
        };

        beforeEach(function() {
            project = createProject(projectParams);
        });

        it('should have that name and user ID', function() {
            expect(project.name).to.equal(projectParams.projectName);
            expect(project.creatorUserID).to.equal(projectParams.creatorUserID);
        });
    });
});
