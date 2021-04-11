/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import createRootReducer from './rootReducer';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const bindMiddlewares = (middleware) => composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(
  createRootReducer(history),
  initialState,
  bindMiddlewares([sagaMiddleware, routerMiddleware(history)])
);

sagaMiddleware.run(rootSaga);

export default store;
