import React from "react";
import { connect } from "react-redux";

import ShapeListItem from "./ShapeListItem";
import sortShapes from "../selectors/shapes";

const ShapeList = (props) => {
  console.log("shapes list =>", props.shapes);

  return <div>ok</div>;
};
// <div>
//   <h1>Sorted Shapes</h1>
//   <ShapeListItem />
//   {props.shapes.map((shape) => {
//     console.log("this is a shape", shape);
//     return <ShapeListItem {...shape} />;
//   })}
// </div>

const mapStateToProps = (state) => {
  return {
    shapes: sortShapes(state.shapes, state.filters),
  };
};

export default connect(mapStateToProps)(ShapeList);
