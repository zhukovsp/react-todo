var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {Search} from 'Search';

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should dispacth SET_SEARCH_TEXT on input change', () => {
    var searchText = 'Dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

    search.refs.searchText.value = searchText;
    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispacth TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
