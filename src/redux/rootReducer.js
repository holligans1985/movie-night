import { combineReducers } from 'redux';
import moviesReducer from '../containers/Movies';

const rootReducer = combineReducers({ Movies: moviesReducer });

export default rootReducer;
