import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Header from '../index';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('get a input element', async () => {
    const { getByPlaceholderText } = render(<Header />);
    const fieldNode = await waitForElement(() => getByPlaceholderText('----'));
    fireEvent.change(fieldNode);
  });
});
