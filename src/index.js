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
import sortShapes from "./selectors/shapes";

// Store config
const store = configureStore();

// Dispatch

// // Circles
// store.dispatch(addShape({ sideOne: 5 }));
// // Triangles
// store.dispatch(addShape({ sideOne: 5, sideTwo: 5, sideThree: 5 }));
// store.dispatch(addShape({ sideOne: 25, sideTwo: 5, sideThree: 11 }));
// // Quadrilaterals
// store.dispatch(addShape({ sideOne: 3, sideTwo: 3, sideThree: 3, sideFour: 3 }));
store.dispatch(
  addShape({ sideOne: 50, sideTwo: 100, sideThree: 30, sideFour: 40 })
);

// State
const state = store.getState();

console.log(state);

sortShapes(state.shapes, state.filters);

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
