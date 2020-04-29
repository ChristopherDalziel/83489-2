const filterReducerDefaultState = {
  sortBy: "triangles",
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
    case "SORT_BY_QUADRILATERALS":
      return {
        ...state,
        sortBy: "quadrilaterals",
      };
    default:
      return state;
  }
};

export default filterReducer;
