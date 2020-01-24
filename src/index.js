import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers/carReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

// step 1 - create a store and connect it ot our app
// step 1a - create an 'empty' reducer and initial state

const store = createStore(carReducer);
console.log(store.getState());

// step 1b- provide the store to your app with provider and store prop

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
