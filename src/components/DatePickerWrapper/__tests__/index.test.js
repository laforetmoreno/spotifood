import React from 'react';
import renderer from 'react-test-renderer';
import DatePickerWrapper from '../index';

describe('<DatePickerWrapper />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DatePickerWrapper>
          <h1>test</h1>
        </DatePickerWrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
