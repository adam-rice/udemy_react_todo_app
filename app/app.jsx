/*jshint esversion: 6 */
const React = require('react');
const ReactDOM = require('react-dom');
require('Styles');
const TodoApp = require('TodoApp.jsx');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
