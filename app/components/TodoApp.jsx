/*jshint esversion: 6 */
const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

import TodoList from 'TodoList.jsx';
import AddTodo from 'AddTodo.jsx';
import TodoSearch from 'TodoSearch';



const TodoApp = React.createClass({
  render: function() {
    return (
      <div id="body">
        <h1>Todo Tracker</h1>
        <TodoSearch/>
        <TodoList/>
        <AddTodo/>
      </div>
    )
  }
});

module.exports = TodoApp;
