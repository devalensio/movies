import { combineReducers } from 'redux';

import moviesReducer from '../modules/movies/reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
