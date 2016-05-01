var React = require('react/addons'),
    ReactApp = React.createFactory(require('../components/ReactApp'));

var originalUrls = require("../components/url");



module.exports = function(app) {
    var urls = originalUrls;

    app.get('/', function(req, res){

        var reactHtml = React.renderToString(ReactApp({}));

        res.render('index.ejs', {reactOutput: reactHtml});
    });

    app.post('/', function(req, res){

       urls = req.body.urls;

        res.send("success");
    });

    app.get('/:routeParam', function(req, res){
        var shortCode = req.params.routeParam;
        if(shortCode !== "favicon.ico"){
            console.log("what is urls", urls);
            urls.forEach(function(url){
                if(url['shortened url'].slice(36) == shortCode){
                    var longUrl = url['original url']
                    console.log("redirection takes place", longUrl);
                    res.redirect(longUrl);
                }
            })

        }
        else{
            res.send("favicon.ico does not exist");
        }

    });


};