const filterReducerDefaultState = {
  sortBy: "Triangles",
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default filterReducer;
