import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import Routes from "../routes";

import rootSaga from "./store/sagas";
import rootReducer from "./store/ducks";

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

const App = () => (
  <Routes>
    <Provider store={store} />
  </Routes>
);

export default App;
