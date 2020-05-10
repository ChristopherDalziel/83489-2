import filterReducer from "../../reducers/filters";

test("Should set up filter default values / triangles", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ sortBy: "Triangles" });
});

test("Should set sortBy to Circles", () => {
  const action = "Circles";
  const state = filterReducer(undefined, { type: "SORT_BY" });
  expect(state).toEqual({ sortBy: action.key });
});

test("Should set sortBy to Quadrilaterals", () => {
  const action = "Circles";
  const state = filterReducer(undefined, { type: "SORT_BY" });
  expect(state).toEqual({ sortBy: action.key });
});
