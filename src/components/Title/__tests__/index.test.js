import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Title from '../index';

describe('<Title />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('get by id and change', async () => {
    const { getByTestId } = render(<Title />);
    const fieldNode = await waitForElement(() => getByTestId('title'));
    fireEvent.change(fieldNode);
  });
});
