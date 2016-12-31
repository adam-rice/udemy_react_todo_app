/*jshint esversion: 6 */
const React = require('react');

const TodoSearch = React.createClass({
  handleSearch: function(e) {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function() {
    return (
      <div id="search-div">
        <input
          type="search"
          ref="searchText"
          placeholder="Search Todos"
          onChange={this.handleSearch}
        />
        <label>
          <input
            id="checkbox"
            type="checkbox"
            ref="showCompleted"
            onChange={this.handleSearch}
          />
          Show Completed Todos
        </label>
      </div>
    );
  }
});

module.exports = TodoSearch;
