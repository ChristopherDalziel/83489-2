import { createStore, combineReducers } from "redux";
import shapesReducer from "../reducers/shapes";
import filterReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({ shapes: shapesReducer, filters: filterReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
