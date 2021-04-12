import React from 'react';

import renderer from 'react-test-renderer';

import Movie from './Movie';

describe('Movie', () => {
  it('renders Movie successfully', () => {
    const component = renderer.create(<Movie movie={{ Poster: 'N/A' }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
