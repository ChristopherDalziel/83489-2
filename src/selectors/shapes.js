const sortShapes = (shapes, { sortBy }) => {
  return shapes.filter((shape) => {
    const removeEmpty = (obj) => {
      Object.keys(obj).forEach(
        (key) => !obj[key] && obj[key] !== undefined && delete obj[key]
      );
      return console.log(obj);
    };

    removeEmpty(shape);

    if (sortBy === "triangles" && Object.values(shape).length === 3) {
      console.log("must be triangle");
    } else if (sortBy === "triangles" && Object.values(shape).length !== 3) {
      return console.log("this must not be a triangle");
    }
  });
};

export default sortShapes;
