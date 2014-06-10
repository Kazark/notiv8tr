/* jshint expr: true */
describe('project', function() {
    it('should be able to be created from a name and a user ID', function() {
        var project = createProject({
            userID: 0,
            projectName: "Biblical Theology"
        });

        expect(project).to.be.ok;
    });
});
