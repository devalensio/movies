import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/movies/:id" component={About} /> */}
      </Switch>
    </div>
  );
}

export default App;
