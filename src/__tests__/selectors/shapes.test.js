import sortShapes from "../../selectors/shapes";
import shapes from "../fixtures/shapes";

test("Should filter shapes with only one side and return them as Circles", () => {
  const filters = {
    sortBy: "Circles",
  };
  const result = sortShapes(shapes, filters);
  expect(result).toEqual([shapes[0]]);
});

test("Should filter shapes with three sides and return them as Triangles", () => {
  const filters = {
    sortBy: "Triangles",
  };
  const result = sortShapes(shapes, filters);
  expect(result).toEqual([shapes[1]]);
});

test("Should filter shapes with four sides and return them as Quadrilaterals", () => {
  const filters = {
    sortBy: "Quadrilaterals",
  };
  const result = sortShapes(shapes, filters);
  expect(result).toEqual([shapes[2]]);
});
