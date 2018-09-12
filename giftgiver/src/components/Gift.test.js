import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift'

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot();
  });
});
