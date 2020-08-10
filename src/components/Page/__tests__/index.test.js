import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../index';

describe('<Page />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Page>
          <h1>test</h1>
        </Page>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
