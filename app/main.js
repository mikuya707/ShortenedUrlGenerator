var React = require('react');
//if (typeof window !== undefined) window.React = React;
//var React = require('react/addons');
var ReactApp = require('./components/ReactApp');
var TableComponent = require('./components/TableComponent');

//var ReactDOM = require('react-dom');

//var mountNode = document.getElementById('react-main-mount');
//
//ReactDOM.render(new ReactApp({}), mountNode);

React.render(<ReactApp/>, document.getElementById('react-main-mount'));
//var mountTable= document.getElementById('table-area');
//ReactDOM.render(new TableComponent({}), mountTable);
//React.render(<TableComponent/>, document.getElementById('table-area'));