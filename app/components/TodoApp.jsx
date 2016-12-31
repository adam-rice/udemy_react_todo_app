/*jshint esversion: 6 */
const React = require('react');
const TodoList = require('TodoList.jsx');

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'i like to do the cha cha'
        }, {
          id: 2,
          text: 'number two'
        }
      ]
    }
  },
  render: function() {
    const { todos } = this.state;

    return (
      <div id="body">
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
