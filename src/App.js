import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';

import Navbar from './components/Navbar';

import store from './store';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app__wrapper">
        <Navbar />
        <div className="app__wrapper--body">
          <Switch>
            <Route exact path="/">
              <Home dispatch={store.dispatch} />
            </Route>
            {/* <Route exact path="/movies/:id" component={About} /> */}
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
