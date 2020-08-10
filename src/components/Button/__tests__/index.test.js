import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../index';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>Click here</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a submit button', () => {
    const tree = renderer.create(<Button type="submit">Click here</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('get by id and click', async () => {
    const { getByTestId } = render(<Button />);
    const fieldNode = await waitForElement(() => getByTestId('btn'));
    fireEvent.click(fieldNode);
  });

  it('Unmount Component At Node ', () => {
    let container = null;
    beforeEach(() => {
      container = document.createElement(<Button />);
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
  });
});
