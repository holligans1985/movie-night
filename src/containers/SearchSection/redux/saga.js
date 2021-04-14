import { call, takeEvery, put } from 'redux-saga/effects';
import actionNames from './constants';
import services from '../../../services';

function* searchMovieSaga({ payload }) {
  const { searchMovie } = services;
  try {
    const data = yield call(searchMovie, payload);
    yield put({ type: actionNames.searchMoviesSuccess, payload: data.results });
  } catch (error) {
    yield put({
      type: actionNames.searchMoviesError,
      payload: { errorMsg: 'An error happened when searching movie' },
    });
  }
}

export default function* searchSagas() {
  yield takeEvery('SEARCH_MOVIES', searchMovieSaga);
}
