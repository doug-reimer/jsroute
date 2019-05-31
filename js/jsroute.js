
class JsRouter {
    
    constructor(configuration) {
        this.routes = configuration.routes;
        this.contentDivId = configuration.contentDivId;

        Object.keys(this.routes).forEach(element => {
            this.routes[element].content = "";
        });
        this.initialize();
    }

    initialize() {
        console.log("initializing JsRouter");
        let _app = this;
        window.addEventListener('click', function(event) {
            if (event.target.matches("[data-route]")) {
                event.preventDefault();
                _app.route(event.target.pathname);
            }
        });

        window.addEventListener('load', function(event) {
            _app.route(window.location.hash.slice(1) || "/")
        });

        window.addEventListener('hashchange', function(event) {
            _app.loadTemplate(window.location.hash.slice(1) || "/");
        });

    }

    route(route) {
        window.history.pushState({},
            window.location.pathname,
            window.location.origin + "#" + route);
        this.loadTemplate(route);
    }

    loadTemplate(route) {
        let _app = this;
        let contentContainer = document.getElementById(_app.contentDivId);
        if (_app.routes[route].content === "") {
            fetch(_app.routes[route].template)
                .then(function(response) {
                    return response.text();
                })
                .then(function(content) {
                    contentContainer.innerHTML = content;
                    _app.routes[route].content = content;
                });
        } else {
            contentContainer.innerHTML = _app.routes[route].content;
        }
    }

}