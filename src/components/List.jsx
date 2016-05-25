var React = require('react');
var ListItem = require("./ListItem.jsx")

var ingredients = [{"id":2, "text":"ham"}, {"id": 3, "text": "cheese"}];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(item => {
    	console.log(item.id);
    	console.log(item.text);
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    
    return (
      <ul>{listItems}</ul>
    );
  }
});


module.exports = List;
