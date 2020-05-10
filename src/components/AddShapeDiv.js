import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import ShapeForm from "./ShapeForm";
import { addShape, resetShapes } from "../actions/shapes";

export const Button = styled.button`
  margin: 10px 0px 0px 10px;
  width: 10vw;
  @media (max-width: 815px) {
    width: 160px;
    text-align: left;
  }
`;

export class AddShapeDiv extends React.Component {
  state = {
    menuShown: false,
  };

  onSubmit = (shape) => {
    this.props.addShape(shape);
    this.setState({ menuShown: false });
  };

  resetApp = () => {
    this.props.resetShapes();
  };

  render() {
    return (
      <>
        {this.state.menuShown ? (
          <Button
            type="toggle"
            onClick={() => this.setState({ menuShown: !this.state.menuShown })}
          >
            Cancel
          </Button>
        ) : (
          <Button
            type="toggle"
            onClick={() => this.setState({ menuShown: !this.state.menuShown })}
          >
            Create your own shape
          </Button>
        )}

        <Button onClick={this.resetApp}>Reset</Button>

        {this.state.menuShown ? <ShapeForm onSubmit={this.onSubmit} /> : ""}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShape: (shape) => dispatch(addShape(shape)),
    resetShapes: () => dispatch(resetShapes()),
  };
};

export default connect(undefined, mapDispatchToProps)(AddShapeDiv);
