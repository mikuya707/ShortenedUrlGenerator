var React = require('react');
var Griddle = React.createFactory(require('griddle-react'));


var TableComponent = React.createClass({
    render: function () {
        <div id="table-area">
            <Griddle results={urls} tableClassName="table" columnMetadata={columnMeta} />
        </div>
    }
})

//React.render(<TableComponent/> , document.getElementById('app'))

module.export = TableComponent;
