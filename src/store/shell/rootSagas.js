import { all, takeLatest } from 'redux-saga/effects';

import moviesSagas from '../modules/movies/sagas';

export default function* rootSaga() {
  const sagasMapping = moviesSagas.map(sagas => {
    function* sagasFunction() {
      yield takeLatest(...sagas);
    }

    return sagasFunction();
  });

  yield all(sagasMapping);
}
