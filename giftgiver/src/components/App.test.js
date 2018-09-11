import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  const app = shallow(<App />);
  // check if the app renders as we want it to.
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the states with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the add-gift button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({gifts: []});
    })

    it('adds a new gift to the state', () => {
      expect(app.state().gifts).toEqual([{id: 1}]);
    });

    it('adds a new gift to the list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  })
});
