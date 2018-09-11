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
