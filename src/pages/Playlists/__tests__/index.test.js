import React from 'react';
import { render } from '@testing-library/react';

import Playlists from '../index';

jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => ReactComponent => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),
    Provider: ({ children }) => children,
  };
});

describe('Playlists', () => {
  it('Render a element', () => {
    const { debug } = render(() => <Playlists data={[]} />);

    debug();
  });
});
