var React = require('react');

var Search = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="Search todos"/>
          <input id="checkbox1" type="checkbox"/><label for="checkbox1">Show completed todos</label>
        </form>
      </div>
    );
  }
});

module.exports = Search;
