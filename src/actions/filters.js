const sortBy = (key) => ({
  type: "SORT_BY",
  sortBy: key,
});

export const sortByTriangles = (key = "Triangles") => sortBy(key);
export const sortByCircles = (key = "Circles") => sortBy(key);
export const sortByQuadrilaterals = (key = "Quadrilaterals") => sortBy(key);
