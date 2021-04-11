import { all } from 'redux-saga/effects';
import searchSagas from '../containers/SearchSection/redux/saga';

export default function* rootSaga() {
  yield all([searchSagas()]);
}
