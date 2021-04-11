import { call, put } from 'redux-saga/effects';

import { Movies } from './constants';
import {
  loadingMovies,
  loadedMovies,
  errorLoadingMovies,
} from './actions';

import { coreAPI } from '../../../utils/coreAPI';

function* getMovies(action) {
  const { data } = action.payload;

  yield put(loadingMovies());

  try {
    const response = yield call(coreAPI, {
      method: 'GET',
      path: `/?apikey=faf7e5bb&s=Attack On Titan`,
    });
    
    yield put(loadedMovies(response.Search));
  }
  catch (e) {
    yield put(errorLoadingMovies());
  }
}

export default [
  [Movies.getMovies, getMovies],
];
