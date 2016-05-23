var react = require('react');
var ListItem = require("./LiatItem.jsx")

var ingredients = [{"id":2, "text":"ham"}, {"id":2, "text":"cheese"}];

var List = react.CreateClass({
  render: function() {
    var listItems = ingredients.map(item => {
      <ListItem key={item.id} ingredient={item.text} />;
    });

    return (
      <ul>{listItems}</ul>
    );
  }
)};


module.exports = List;
