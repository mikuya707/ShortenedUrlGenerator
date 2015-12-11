/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with griddle component */
//var Griddle = React.createFactory(require('griddle-react'));
var Griddle = React.createFactory(require('griddle-react'));
var urls = [{
        "original url": "facebook.com",
        "shortened url": "fb.com"
    },{
        "original url": "google.com",
        "shortened url": "gl.com"
    }];

var shorten = [{"original url": "facebook.com",
    "shortened url": "fb.com"}];

var ReactApp = React.createClass({

    componentDidMount: function () {
        console.log("yes");

    },
    render: function () {
        return (
            <div>
            <div id="form">
                <form>
                 <section>Paste your long url here</section>
                 <input type="text" placeholder="http://...." />
                 <button type="submit" value="Submit">Shorten URL</button>
                </form>
            </div>
            <div id="table-area">
                <Griddle results={urls} tableClassName="table"/>
            </div>
            </div>
        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;