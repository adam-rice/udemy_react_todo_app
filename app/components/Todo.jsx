/*jshint esversion: 6 */
const React = require('react');

const Todo = React.createClass({
  render: function() {
    const { text, id, completed } = this.props;

    return (
      <div
        className="todo"
        onClick={() => {
        this.props.onToggle(id);
      }}>
        <input
          className="completed-checkbox"
          type="checkbox"
          checked={completed}
        />
        {text}
      </div>
    );
  }
});

module.exports = Todo;
