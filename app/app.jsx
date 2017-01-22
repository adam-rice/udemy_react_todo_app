/*jshint esversion: 6 */
const React = require('react');
const ReactDOM = require('react-dom');
require('Styles');
const TodoApp = require('TodoApp.jsx');
const actions = require('./actions/actions.jsx');
const store = require('./store/configureStore.jsx').configure();
const reducers = require('./reducers/reducers.jsx');

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
