import React from 'react';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import MovieDetail from './MovieDetail';
import store from '../../store';


describe('Movie Detail', () => {
  it('renders MovieDetail successfully', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MovieDetail />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
