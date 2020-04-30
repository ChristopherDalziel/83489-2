const expectedSides = {
  Circles: 1,
  Triangles: 3,
  Quadrilaterals: 4,
};

const sortShapes = (shapes, { sortBy }) => {
  return shapes.filter((shape) => {
    const sides = Object.values(shape).filter((side) => side).length;
    return sides === expectedSides[sortBy];
  });
};

export default sortShapes;
