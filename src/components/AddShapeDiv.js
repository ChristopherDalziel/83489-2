import React from "react";
import { connect } from "react-redux";
import ShapeForm from "./ShapeForm";
import { addShape } from "../actions/shapes";

export class AddShapeDiv extends React.Component {
  onSubmit = (shape) => {
    this.props.addShape(shape);
  };

  render() {
    return <ShapeForm onSubmit={this.onSubmit} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShape: (shape) => dispatch(addShape(shape)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddShapeDiv);
