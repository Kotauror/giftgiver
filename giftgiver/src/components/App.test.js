import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

// check if the app renders as we want it to.
it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the states with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to the state when clicking add gift button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{id: 1}]);
});

it('adds a new gift to the list', () => {
  app.find('.btn-add').simulate('click');

  expect(app.find('.gift-list').children().length).toEqual(2); // test pollution
});
