var express = require('express'),
    path = require('path'),
    app = express(),
    port = 5000,
    bodyParser = require('body-parser');

require('node-jsx').install();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./app/routes/routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
