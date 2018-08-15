import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import persistState from "redux-localstorage";

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./actions/index";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  reduxDevTools
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
