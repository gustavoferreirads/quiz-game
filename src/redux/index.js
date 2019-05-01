import { applyMiddleware, compose, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk, reduxPromise)));
export default store;
