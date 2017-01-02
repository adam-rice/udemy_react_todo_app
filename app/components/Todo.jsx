/*jshint esversion: 6 */
const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  render: function() {
    const { text, id, completed, createdAt, completedAt } = this.props;
    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }
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
        {text} - {renderDate()}
      </div>
    );
  }
});

module.exports = Todo;
