const removeEmpty = (obj) => {
  Object.keys(obj).forEach(
    (key) => !obj[key] && obj[key] !== undefined && delete obj[key]
  );
  return console.log(obj);
};

const sortShapes = (shapes, { sortBy }) => {
  return shapes.filter((shape) => {
    removeEmpty(shape);

    if (sortBy === "triangles" && Object.values(shape).length === 3) {
      console.log("must be triangle");
    } else if (sortBy === "triangles" && Object.values(shape).length !== 3) {
      console.log("this must not be a triangle");
    } else if (sortBy === "circles") {
      console.log("working");
    }
  });
};

export default sortShapes;
