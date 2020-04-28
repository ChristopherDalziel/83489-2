import { v4 as uuidv4 } from "uuid";

export const addShape = ({
  sideOne = "",
  sideTwo = "",
  sideThree = "",
  sideFour = "",
} = {}) => ({
  type: "ADD_SHAPE",
  shape: {
    id: uuidv4(),
    sideOne,
    sideTwo,
    sideThree,
    sideFour,
  },
});
