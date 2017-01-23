/*jshint esversion: 6 */
const React = require('react');
import { connect } from 'react-redux';
import actions from '../actions/actions.jsx';

export const TodoSearch = React.createClass({
  render: function() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div id="search-div">
        <input
          type="search"
          ref="searchText"
          placeholder="Search Todos"
          value={searchText}
          onChange={() => {
            let searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}
        />
        <label>
          <input
            id="checkbox"
            type="checkbox"
            ref="showCompleted"
            checked={showCompleted}
            onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}
          />
          Show Completed Todos
        </label>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
