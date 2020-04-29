import React from "react";
import { connect } from "react-redux";

// import ShapeListItem from "./ShapeListItem";
import sortShapes from "../selectors/shapes";

import { Circle, Triangle, Rectangle } from "react-shapes";

const ShapeListItem = ({ sideOne, sideTwo, sideThree, sideFour }) => {
  return (
    <div>
      <p>
        {sideOne && !sideTwo && (
          <Circle
            r={sideOne * 10}
            fill={{ color: "#2409ba" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={3}
          />
        )}
        {sideTwo && sideTwo && sideThree && !sideFour && (
          <Triangle
            width={sideOne * 10}
            height={sideTwo * 10}
            fill={{ color: "#2409ba" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={3}
          />
        )}
        {sideTwo && sideTwo && sideThree && sideFour && (
          <Rectangle
            width={sideOne * 10}
            height={sideTwo * 10}
            fill={{ color: "#2409ba" }}
            stroke={{ color: "#E65243" }}
            strokeWidth={3}
          />
        )}
      </p>
    </div>
  );
};

const ShapeList = (props) => {
  return (
    <div>
      <>
        <h1>Sorted Shapes</h1>
        {props.shapes.map((shape) => {
          return <ShapeListItem {...shape} />;
        })}
      </>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shapes: sortShapes(state.shapes, state.filters),
  };
};

export default connect(mapStateToProps)(ShapeList);
