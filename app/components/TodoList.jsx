/*jshint esversion: 6 */
const React = require('react');
const Todo = require('Todo.jsx');
import { connect } from 'react-redux';

export const TodoList = React.createClass({
  render: function() {
    const { todos } = this.props;

    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div id="list-div">
        <h2>Todo List</h2>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
