import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// actions
import authReducer from '../reducers/auth';
import costsReducer from '../reducers/costs';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      costs: costsReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
}