/*jshint esversion: 6 */
const React = require('react');
import { connect } from 'react-redux';
import actions from '../actions/actions.jsx';


export const AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    let todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="new-todo-input"
          type="text"
          placeholder="What do you need to do?"
          ref="todoText"
        />
        <button className="button expanded">Add</button>
      </form>
    );
  }
});

export default connect()(AddTodo);
