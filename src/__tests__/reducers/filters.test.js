import filterReducer from "../../reducers/filters";

test("Should set up filter default values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ sortBy: "Triangles" });
});

test("Should set sortBy to Circles", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_CIRCLES" });
  expect(state).toEqual({ sortBy: "Circles" });
});

test("Should set sortBy to Quadrilaterals", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_QUADRILATERALS" });
  expect(state).toEqual({ sortBy: "Quadrilaterals" });
});

test("Should set sortBy to Triangles", () => {
  const currentState = {
    sortBy: "Circles",
  };
  const action = { type: "SORT_BY_TRIANGLES" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("Triangles");
});
