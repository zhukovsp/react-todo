var React = require('react');
var AddTodo = require('AddTodo');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
