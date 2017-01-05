var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import Search from 'Search';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered medium-6 large-5 small-11">
            <div className="container">
              <Search/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;

// [
//   {
//     id: uuid(),
//     text: 'Walk the dog',
//     completed: false
//   }, {
//     id: uuid(),
//     text: 'Clean the yard',
//     completed: true
//   }, {
//     id: uuid(),
//     text: 'Leave mail on porch',
//     completed: true
//   }, {
//     id: uuid(),
//     text: 'Play video games',
//     completed: false
//   }
// ]
