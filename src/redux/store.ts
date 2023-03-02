/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import { createWrapper } from "next-redux-wrapper";
import type { Middleware, Store, StoreEnhancer } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import type { AppState } from "./interface";
import rootReducer from "./reducer";
import rootSaga from "./saga";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    console.log(composeWithDevTools);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store<AppState>>(makeStore, {
  debug: true,
});
