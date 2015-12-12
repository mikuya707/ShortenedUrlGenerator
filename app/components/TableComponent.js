var React = require('react');

var Griddle = React.createFactory(require('griddle-react'));


var LinkComponent = React.createClass({
    render: function(){
        url ="http://" + this.props.data;
        return <a href={url}>{this.props.data}</a>
    }
});

var ShortenLinkComponent = React.createClass({
    render: function(){
        url = this.props.data;
        return <a href={this.props.rowData["original url"]}>{this.props.data}</a>
    }
});

var columnMeta = [
    {
        "columnName": "shortened url",
        "order": 2,
        "locked": false,
        "visible": true,
        "customComponent": ShortenLinkComponent
    },
    {
        "columnName": "original url",
        "order": 1,
        "locked": false,
        "visible": true,
        "customComponent": LinkComponent
    }

];


var TableComponent = React.createClass({
    render: function(){
        return (
            <Griddle results={this.props.value} tableClassName="table" columnMetadata={columnMeta}/>
        )
    }

})



module.exports = TableComponent;
