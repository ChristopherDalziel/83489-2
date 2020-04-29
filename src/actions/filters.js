export const sortByTriangles = (sortBy = "triangles") => ({
  type: "SORT_BY_TRIANGLES",
  sortBy,
});

export const sortByCircles = (sortBy = "circles") => ({
  type: "SORT_BY_CIRCLES",
  sortBy,
});

export const sortByQuadrilaterals = (sortBy = "quadrilaterals") => ({
  type: "SORT_BY_QUADRILATERALS",
  sortBy,
});
