import React from "react";
import { connect } from "react-redux";
import ShapeForm from "./ShapeForm";
import { addShape } from "../actions/shapes";

const AddShapeDiv = (props) => {
  return (
    <ShapeForm
      onSubmit={(shape) => {
        props.dispatch(addShape(shape));
      }}
    />
  );
};

export default connect()(AddShapeDiv);
