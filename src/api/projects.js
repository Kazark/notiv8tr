api.projects = (function() {
    var projects = {};
    projects.url = api.url + 'projects';

    var _project; // TODO this needs to be test-drive away...

    projects.post = function(request, response) {
        _project = domain.createProject().fromPost(request.body);
        response.send(201, _project.asJsonForHttp(baseUrl + projects.url));
    };

    projects.getById = function(request, response) {
        response.json(_project.asJsonForHttp());
    };

    return projects;
})();
