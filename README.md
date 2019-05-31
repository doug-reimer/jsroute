# jsroute
### Vanilla Javascript Routing

A simple example of very basic vanilla Javascript routing.

### Details

Instantiate an instance of JsRouter passing in an object containing a list of routes (with their template locations) and the id of the `div` for the content:
```javascript
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
```

The JsRouter uses an empty `data-route` attribute to identify routeable `href` links with the `href` attribute targeting the desired route:
```html
<a data-route class="nav-link" href="/">Home</a>
<a data-route class="nav-link" href="/About">About</a>
<a data-route class="nav-link" href="/Contact">Contact</a>
<div id="content"></div>
```
