import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Select from '../index';

describe('<Select />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Select
          placeholder=""
          disabled={false}
          options={[{ name: 'fake name', value: 'fake value' }]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('get by id and change', async () => {
    const { getByTestId } = render(
      <Select
        placeholder=""
        disabled={false}
        options={[{ name: 'fake name', value: 'fake value' }]}
      />,
    );
    const fieldNode = await waitForElement(() => getByTestId('select'));
    fireEvent.change(fieldNode);
  });
});
