import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from '../index';

describe('<Card />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('get by id and change', async () => {
    const { getByTestId } = render(<Card />);
    const fieldNode = await waitForElement(() => getByTestId('card'));
    fireEvent.change(fieldNode);
  });
});
