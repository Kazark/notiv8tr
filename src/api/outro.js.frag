    api.registerRoutes = function(app) {
        app.post(api.projects.url, api.projects.post);
        app.get(api.projects.url + '/:id', api.projects.getById);
    };

    return api;
})();
