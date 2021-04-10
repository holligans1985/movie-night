import { all } from 'redux-saga/effects';
import MovieSagas from '../containers/Movies/redux/saga';

export default function* rootSaga() {
  yield all([MovieSagas()]);
}
