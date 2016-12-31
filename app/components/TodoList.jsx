/*jshint esversion: 6 */
const React = require('react');
const Todo = require('Todo.jsx');

const TodoList = React.createClass({
  render: function() {
    const { todos } = this.props;

    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;