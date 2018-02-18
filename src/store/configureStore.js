import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// actions
import authReducer from '../reducers/auth';
import costReducer from '../reducers/cost';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      cost: costReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
}