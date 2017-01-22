/*jshint esversion: 6 */
const React = require('react');
const moment = require('moment');
import { connect } from 'react-redux';
import actions from '../actions/actions.jsx';

export const Todo = React.createClass({
  render: function() {
    const { text, id, completed, createdAt, completedAt, dispatch } = this.props;
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
        dispatch(actions.toggleTodo(id));
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

export default connect()(Todo);
