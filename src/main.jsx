var react = require('react');
var reactDom = require('react-dom');
var list = require('./components/List.jsx');

reactDom.render(<List />, document.getElementById('ingredients'));
