import React from 'react';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Home from './Home';
import store from '../../store';


describe('Home', () => {
  it('renders Home successfully', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
