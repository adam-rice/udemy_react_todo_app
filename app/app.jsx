/*jshint esversion: 6 */
const React = require('react');
const ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
require('Styles');
const TodoApp = require('TodoApp.jsx');
const actions = require('./actions/actions.jsx');
const store = require('./store/configureStore.jsx').configure();
const TodoAPI = require('TodoAPI');
const reducers = require('./reducers/reducers.jsx');

store.subscribe(() => {
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
