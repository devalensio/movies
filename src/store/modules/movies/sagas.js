import { call, put } from 'redux-saga/effects';

import { Movies } from './constants';
import * as actions from './actions';

import { coreAPI } from '../../../utils/coreAPI';

function* getMovies(action) {
  const { page, title, withPrevious } = action.payload;

  yield put(actions.loadingMovies());

  try {
    const response = yield call(coreAPI, {
      method: 'GET',
      path: `/?apikey=faf7e5bb&s=${title}&page=${page}`,
    });

    let movies = [];

    if (response.Search) movies = response.Search;
    if (withPrevious) {
      yield put(actions.loadedMoviesWithPrevious(movies));
    } else {
      yield put(actions.loadedMovies(movies));
    }

    action.callback && action.callback();
  }
  catch (e) {
    yield put(actions.errorLoadingMovies());
  }
}

function* getMovieDetail(action) {
  const { movieId } = action.payload;

  yield put(actions.loadingMovieDetail());

  try {
    const response = yield call(coreAPI, {
      method: 'GET',
      path: `/?apikey=faf7e5bb&i=${movieId}`,
    });

    if (response && Object.keys(response).length) {
      yield put(actions.loadedMovieDetail(response));
    }
  }
  catch (e) {
    yield put(actions.errorLoadingMovieDetail());
  }
}

export default [
  [Movies.getMovies, getMovies],
  [Movies.getMovieDetail, getMovieDetail],
];
