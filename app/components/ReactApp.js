var TableComponent = require('./TableComponent');

var React = require('react');
//var ExecutionEnvironment = require("react/lib/ExecutionEnvironment");



//if (typeof window !== undefined) window.React = React;
//var React = window.React = require('react/addons');
var urls = require('./url');
var GLOBALS_URLS = urls;

/* create table with griddle component */
var Griddle = React.createFactory(require('griddle-react'));


//if (ExecutionEnvironment.canUseDOM) {
    // ... has dom ..

//}


var ReactApp = React.createClass({

    componentDidMount: function () {

        console.log("yes");

    },
    //componentWillMount: function(){
    //    this.callback = function(data) {
    //        console.log(data);
    //        this.setState({urls: data.shortUrl});
    //    };
    //},
    getInitialState: function(){
        return {
            urls: urls,
            longToShort: [],
            shortToLong: [],
            shortUrlCode: ""
        }
    },
    shortenURL: function (longUrl) {
        this.state.shortUrlCode = this.state.longToShort[longUrl];

        if (this.state.shortUrlCode == undefined) {
            this.state.shortUrlCode = this.randomString(5);
            this.state.longToShort[longUrl] = this.state.shortUrlCode;
            this.state.shortToLong[this.state.shortUrlCode] = longUrl;
            this.setState({
                longToShort: this.state.longToShort,
                shortToLong: this.state.shortToLong,
                shortUrlCode: this.state.shortUrlCode
            })
        }
        console.log("shortUrlCode is", this.state.shortUrlCode);
        return this.state.shortUrlCode;

    },
    randomString: function(length){
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
        var result = '';

        console.log("Generating random alphanumeric string of length " + length);
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    },
    handleClick: function(e) {
        e.preventDefault();
        console.log("clicked");
        console.log("inputUrl", this.refs.inputUrl.value);
        GLOBALS_URLS.push({
            "original url": this.refs.inputUrl.value,
            "shortened url": "localhost:5000/" + this.shortenURL(this.refs.inputUrl.value)
        });
        this.setState({
            urls: urls
        });
        this.refs.inputUrl.value = "";
    },
    render: function () {
        return (
            <div>
            <div id="form">
                <form>
                 <section>Paste your long url here</section>
                 <input ref="inputUrl"  type="text" placeholder="http://...." />
                 <button onClick={this.handleClick} type="submit">Shorten URL</button>
                </form>
            </div>
                <div id="table-area">
                    <TableComponent />
                </div>
            </div>
        )
    }
});



/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;