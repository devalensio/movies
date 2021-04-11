import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

import store from './store';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app__wrapper">
        <div className="app__wrapper--body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/:id" component={MovieDetail} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
