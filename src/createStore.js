import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './store/reducers';

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);
