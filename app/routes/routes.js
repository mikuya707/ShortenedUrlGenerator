var React = require('react/addons'),
    ReactApp = React.createFactory(require('../components/ReactApp'));
//if (typeof window !== undefined) window.React = React;
var urls = require('../components/url');

module.exports = function(app) {
    var storeUrls = {
        "fb.com": "facebook.com"
    };
    app.get('/', function(req, res){
        // React.renderToString takes your component
        // and generates the markup
        var reactHtml = React.renderToString(ReactApp({}));
        // Output html rendered by react
        // console.log(myAppHtml);
        res.render('index.ejs', {reactOutput: reactHtml});
    });

    app.get('/:routeParam', function(req, res){
        console.log("i am here");

    });


};