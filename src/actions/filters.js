// export const sortByTriangles = (sortBy = "Triangles") => ({
//   type: "SORT_BY_TRIANGLES",
//   sortBy,
// });

// export const sortByCircles = (sortBy = "Circles") => ({
//   type: "SORT_BY_CIRCLES",
//   sortBy,
// });

// export const sortByQuadrilaterals = (sortBy = "Quadrilaterals") => ({
//   type: "SORT_BY_QUADRILATERALS",
//   sortBy,
// });

const sortBy = (key) => ({
  type: "SORT_BY",
  sortBy: key,
});

export const sortByTriangles = (key = "Triangles") => sortBy(key);
export const sortByCircles = (key = "Circles") => sortBy(key);
export const sortByQuadrilaterals = (key = "Quadrilaterals") => sortBy(key);
