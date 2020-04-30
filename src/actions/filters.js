export const sortByTriangles = (sortBy = "Triangles") => ({
  type: "SORT_BY_TRIANGLES",
  sortBy,
});

export const sortByCircles = (sortBy = "Circles") => ({
  type: "SORT_BY_CIRCLES",
  sortBy,
});

export const sortByQuadrilaterals = (sortBy = "Quadrilaterals") => ({
  type: "SORT_BY_QUADRILATERALS",
  sortBy,
});
