(function() {
    var jsRouter = new JsRouter({
        routes: {
            '/': {
                template: './templates/home.html'
            },
            '/home': {
                template: './templates/home.html'
            },
            '/contact' : {
                template: './templates/contact.html'
            }
        },
        contentDivId: 'content'
    });
})();
