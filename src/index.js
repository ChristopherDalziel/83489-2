import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

// Store
import configureStore from "./store/configureStore";
// Actions
import { addShape } from "./actions/shapes";

// Selector

// Store config
const store = configureStore();

// Dispatch
const firstShape = store.dispatch(
  addShape({ sideOne: 5, sideTwo: 5, sideThree: 5, sideFour: 5 })
);

console.log(firstShape);

const providerRender = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(providerRender, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
