import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import searchReducer from '../containers/SearchSection/redux/reducer';

const createRootReducer = (history) =>
  combineReducers({ router: connectRouter(history), Search: searchReducer });

export default createRootReducer;
