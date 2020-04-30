const filterReducerDefaultState = {
  sortBy: "Triangles",
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_TRIANGLES":
      return {
        ...state,
        sortBy: "Triangles",
      };
    case "SORT_BY_CIRCLES":
      return {
        ...state,
        sortBy: "Circles",
      };
    case "SORT_BY_QUADRILATERALS":
      return {
        ...state,
        sortBy: "Quadrilaterals",
      };
    default:
      return state;
  }
};

export default filterReducer;
