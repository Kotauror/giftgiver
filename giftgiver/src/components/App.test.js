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
    const id = 1

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({gifts: []});
    })

    it('adds a new gift to the state', () => {
      expect(app.state().gifts).toEqual([{id: id}]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove an added gift', () => {
      beforeEach(() => {
        // class method within the gift class
        // to acess it we can take a look at app component.
        app.instance().removeGift(id);
      });

      it('removes the gift from state', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  })
});
