import React from 'react';
import renderer from 'react-test-renderer';
import Collapse from '../index';

describe('<Collapse />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Collapse>
          <h1>test</h1>
        </Collapse>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
