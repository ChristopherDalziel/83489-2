const shapesReducerDefaultState = [];

const shapesReducer = (state = shapesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_SHAPE":
      return [...state, action.expense];
    default:
      return state;
  }
};

export default shapesReducer;
