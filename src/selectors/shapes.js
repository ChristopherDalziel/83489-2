const expectedSides = {
  circles: 1,
  triangles: 3,
  quadrilaterals: 4,
};

const sortShapes = (shapes, { sortBy }) => {
  return shapes.filter((shape) => {
    const sides = Object.values(shape).filter((side) => side).length;
    return sides === expectedSides[sortBy];
  });
};

export default sortShapes;
