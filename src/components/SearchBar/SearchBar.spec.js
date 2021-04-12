import React from 'react';

import renderer from 'react-test-renderer';

import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('renders SearchBar successfully', () => {
    const component = renderer.create(<SearchBar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
