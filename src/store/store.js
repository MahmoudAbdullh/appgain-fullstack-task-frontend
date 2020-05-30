import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers';

//export default store;
export function initializeStore (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
