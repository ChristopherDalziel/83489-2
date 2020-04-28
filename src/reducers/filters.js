const filterReducerDefaultState = {
  sortBy: "",
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_TRIANGLES":
      return {
        ...state,
        sortBy: "triangles",
      };
    case "SORT_BY_CIRCLES":
      return {
        ...state,
        sortBy: "circles",
      };
    default:
      return state;
  }
};

export default filterReducer;
