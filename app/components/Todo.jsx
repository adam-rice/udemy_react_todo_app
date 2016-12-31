/*jshint esversion: 6 */
const React = require('react');

const Todo = React.createClass({
  render: function() {
    const { text } = this.props;
    
    return (
      <div>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
