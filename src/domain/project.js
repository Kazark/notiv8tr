domain.createProject = function() {
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

    project.url = function(baseUrl) {
        return baseUrl + '/' + id;
    };

    project.asJsonForHttp = function(baseUrl) {
        return {
            id: id,
            url: project.url(baseUrl),
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
