var React = require('react/addons'),
    ReactApp = React.createFactory(require('../components/ReactApp'));

urls = require('../components/url');


module.exports = function(app) {

    app.get('/', function(req, res){

        var reactHtml = React.renderToString(ReactApp({}));

        res.render('index.ejs', {reactOutput: reactHtml});
    });

    app.get('/:routeParam', function(req, res){
        //If the urls from the client side is passed down here, long url can be looked up based on the urls by matching the 5 character
        // string referened by routeParam
        res.end();

    });


};