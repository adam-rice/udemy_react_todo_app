/*jshint esversion: 6 */
const React = require('react');
const uuid = require('node-uuid');
const TodoList = require('TodoList.jsx');
const AddTodo = require('AddTodo.jsx');
const TodoSearch = require('TodoSearch.jsx');


const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'get the mail'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  render: function() {
    const { todos } = this.state;

    return (
      <div id="body">
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
