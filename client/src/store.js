import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
  rootReducer, 
  initialState, 
  compose(applyMiddleware(thunk), // allow to write action creators that return a function instead of an action.
          // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
          )
);

export default store;