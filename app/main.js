var React = require('react/addons');
var ReactApp = require('./components/ReactApp');
var TableComponent = require('./components/TableComponent');

var mountNode = document.getElementById('react-main-mount');
var mountTable= document.getElementById('table-area');

React.render(new ReactApp({}), mountNode);
React.render(new TableComponent({}), mountTable);