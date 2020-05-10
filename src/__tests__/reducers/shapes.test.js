import shapesReducer from "../../reducers/shapes";
import shapes from "../fixtures/shapes";

test("Should set default state", () => {
  const state = shapesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should add a new shape", () => {
  const shape = {
    sideOne: 25,
    sideTwo: 45,
    sideThree: 10,
    sideFour: 33,
  };
  const action = {
    type: "ADD_SHAPE",
    shape,
  };
  const state = shapesReducer(shapes, action);
  expect(state).toEqual([...shapes, shape]);
});

test("Should reset the data within the state", () => {
  const action = {
    type: "RESET_SHAPES",
  };
  const state = shapesReducer(shapes, action);
  expect(state).toEqual([]);
});
