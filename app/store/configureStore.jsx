/*jshint esversion: 6 */

import redux from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from './reducers/reducers.jsx';


export const configure = () => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = redux.createStore(reducer, reduc.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
