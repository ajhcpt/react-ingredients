var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {

    var createItems = function(text, index) {
      return <ListItem key={index + text} text={text} />;
    };

    return (<ul>{this,props.items.map(createItems)}</ul>);
  }

});

modules.export = List;
