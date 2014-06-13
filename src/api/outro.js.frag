    api.registerRoutes = function(app) {
        app.post(projects.url, projects.post);
        app.get(projects.url + '/:id', projects.getById);
    };

    return api;
})();
