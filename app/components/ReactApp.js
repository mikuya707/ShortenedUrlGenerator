var TableComponent = require('./TableComponent');
var React = require('react');
var urls = require('./url');
var xhr = require('superagent');


/* create table with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var ReactApp = React.createClass({

    componentDidMount: function () {

        console.log("yes");

    },
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

        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    },
    handleClick: function(e) {
        e.preventDefault();
        urls.push({
            "original url": this.refs.inputUrl.value,
            "shortened url": "/" + this.shortenURL(this.refs.inputUrl.value)
        });
        this.setState({
            urls: urls
        });
        this.refs.inputUrl.value = "";

        xhr.post('/').set('Content-Type', 'application/json').send({urls: this.state.urls}).end(function(err, res){
            if(err) return err;
            else console.log(res);
        });

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
                    <TableComponent value={this.state.urls} />
                </div>
            </div>
        )
    }
});



/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;