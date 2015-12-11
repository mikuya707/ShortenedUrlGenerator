/** @jsx React.DOM */
var TableComponent = require('./TableComponent');

var React = require('react/addons');

/* create table with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var urls = [{
        "original url": "facebook.com",
        "shortened url": "fb.com"
    },{
        "original url": "google.com",
        "shortened url": "gl.com"
    }];

var columnMeta = [
    {
        "columnName": "shortened url",
        "order": 1,
        "locked": false,
        "visible": true,
        "customComponent": LinkComponent
    }];



var ReactApp = React.createClass({

    componentDidMount: function () {
        console.log("yes");

    },
    render: function () {
        return (
            <div id="app">
            <div id="form">
                <form>
                 <section>Paste your long url here</section>
                 <input type="text" placeholder="http://...." />
                 <button type="submit" value="Submit">Shorten URL</button>
                </form>
            </div>
                <div id="table-area">
                    <Griddle results={urls} tableClassName="table" columnMetadata={columnMeta} />
                </div>
            </div>
        )
    }
});

var LinkComponent = React.createClass({
    render: function(){
        url ="localhost:5000/" + this.props.rowData.state + "/" + this.props.data;
        return <a href={url}>{this.props.data}</a>
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;