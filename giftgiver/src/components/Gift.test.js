import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift'

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes person and present in state', () => {
    expect(gift.state()).toEqual({person: "", present: ""});
  });

  describe('when typing  into person input', () => {
    const person = "Uncle"

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person}});
      // find .input-person field and type Uncle into it.
    });

    it('updates the person in state', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

});
