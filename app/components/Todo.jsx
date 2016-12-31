/*jshint esversion: 6 */
const React = require('react');

const Todo = React.createClass({
  render: function() {
    const { text, id } = this.props;

    return (
      <div>
        {text} {id}
      </div>
    );
  }
});

module.exports = Todo;
