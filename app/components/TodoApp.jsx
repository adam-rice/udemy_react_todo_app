/*jshint esversion: 6 */
const React = require('react');
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
          id: 1,
          text: 'i like to do the cha cha'
        }, {
          id: 2,
          text: 'number two'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    alert('new todo:' + text);
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
