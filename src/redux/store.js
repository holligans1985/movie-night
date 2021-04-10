import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const initialState = { movies: null };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware(rootSaga);

export default store;
