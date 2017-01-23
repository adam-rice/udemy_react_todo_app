/*jshint esversion: 6 */
const React = require('react');
import Todo from 'Todo.jsx';
import { connect } from 'react-redux';
import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  render: function() {
    const { todos, showCompleted, searchText } = this.props;

    const renderTodos = () => {
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
    return state;
  }
)(TodoList);
