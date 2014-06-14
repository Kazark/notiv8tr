var projects = {};

projects.url = baseUrl + 'projects';

api.createProject = function() {
    var id = '1000';
    var name;
    var creatorUserID;
    var project = {};
    var create = {};

    create.fromPost = function(params) {
        name = params.projectName;
        creatorUserID = params.creatorUserID;
        return project;
    };

    project.url = function() {
        return 'http://localhost:3000' + projects.url + '/' + id;
    };

    project.asJsonForHttp = function() {
        return {
            id: id,
            url: project.url(),
            projectName: name,
            creatorUserID: creatorUserID,
        };
    };

    project.asJsonForDb = function() {
        return {
            id: id,
            name: name,
            creatorUserID: creatorUserID
        };
    };

    return create;
};

var _project; // TODO this needs to be test-drive away...

projects.post = function(request, response) {
    _project = api.createProject().fromPost(request.body);
    response.send(201, _project.asJsonForHttp());
};

projects.getById = function(request, response) {
    response.json(_project.asJsonForHttp());
};
