import React from 'react';
import renderer from 'react-test-renderer';
import Empty from '../index';

describe('<Empty />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Empty />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
