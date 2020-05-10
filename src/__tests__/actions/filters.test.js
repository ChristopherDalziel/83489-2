import {
  sortByTriangles,
  sortByCircles,
  sortByQuadrilaterals,
} from "../../actions/filters";

test("Should generate sort by triangles action object", () => {
  const sortBy = "Triangles";
  const action = sortByTriangles(sortBy);
  expect(action).toEqual({
    type: "SORT_BY",
    sortBy,
  });
});

test("Should generate sort by circles action object", () => {
  const sortBy = "Circles";
  const action = sortByCircles(sortBy);
  expect(action).toEqual({
    type: "SORT_BY",
    sortBy,
  });
});

test("Should generate sort by triangles action object", () => {
  const sortBy = "Quadrilaterals";
  const action = sortByQuadrilaterals(sortBy);
  expect(action).toEqual({
    type: "SORT_BY",
    sortBy,
  });
});
