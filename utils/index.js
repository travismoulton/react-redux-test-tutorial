import { applyMiddleware, createStore } from 'redux';

import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/store/reducers';
import { middleware } from '../src/createStore';

export const findByTestAtrr = (component, attr) =>
  component.find(`[data-test='${attr}']`);

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
};
