var createProject = function(params) {
    var project = {
        id: 1000,
        name: params.projectName,
        creatorUserID: params.creatorUserID,
    };
    project.url = 'http://localhost:3000/api/project/' + project.id;
    return project;
};
