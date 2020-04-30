import { addShape } from "../../actions/shapes";

test("Should set up add shape action object with default values", () => {
  const action = addShape();
  expect(action).toEqual({
    type: "ADD_SHAPE",
    shape: {
      sideOne: "",
      sideTwo: "",
      sideThree: "",
      sideFour: "",
    },
  });
});

test("Should set up add shape action object with provided values", () => {
  const shapeData = {
    sideOne: 1,
    sideTwo: 2,
    sideThree: 3,
    sideFour: 4,
  };
  const action = addShape(shapeData);
  expect(action).toEqual({
    type: "ADD_SHAPE",
    shape: {
      sideOne: 1,
      sideTwo: 2,
      sideThree: 3,
      sideFour: 4,
    },
  });
});
