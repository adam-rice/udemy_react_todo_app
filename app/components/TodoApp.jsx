/*jshint esversion: 6 */
const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');
const TodoAPI = require('TodoAPI.jsx');
const TodoList = require('TodoList.jsx');
const AddTodo = require('AddTodo.jsx');
const TodoSearch = require('TodoSearch.jsx');


const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  render: function() {
    const { todos, showCompleted, searchText } = this.state;
    let filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div id="body">
        <h1>Todo Tracker</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
