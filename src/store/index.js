import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './shell/rootReducers';
import rootSagas from './shell/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;
