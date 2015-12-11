var TableComponent = require('./TableComponent');

var React = require('react/addons');

var urls = require('./url');

/* create table with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var ReactApp = React.createClass({

    componentDidMount: function () {
        console.log("yes");

    },
    handleClick: function() {
       // this.setState({liked: !this.state.liked});
        var longUrl = this.refs.inputUrl;
        urls.push({
            "original url": longUrl,
            "shortened url": "/"
        })
        console.log(longurl);

    },
    render: function () {
        return (
            <div>
            <div id="form">
                <form>
                 <section>Paste your long url here</section>
                 <input ref="inputUrl"  value={this.props.value} type="text" placeholder="http://...." />
                 <button onclick={this.handleClick} type="submit" value="Submit">Shorten URL</button>
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