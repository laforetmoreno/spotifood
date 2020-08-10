import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Error from '../index';

describe('<Error />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('get by id and change', async () => {
    const { getByTestId } = render(<Error />);
    const fieldNode = await waitForElement(() => getByTestId('error'));
    fireEvent.change(fieldNode);
  });
});
