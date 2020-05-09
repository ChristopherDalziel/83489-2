import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import ShapeListItem from "./ShapeListItem";
import sortShapes from "../selectors/shapes";

const ShapeListBody = styled.div`
  margin: 10px;
  overflow: scroll;
`;

const H2 = styled.h2`
  color: #e63846;
`;

const NoShapesMessage = styled.p`
  color: #e63846;
  @media (max-width: 815px) {
    width: 100vw;
    text-align: left;
  }
`;

export const ShapeList = (props) => {
  return (
    <ShapeListBody>
      {props.shapes.length === 0 ? (
        <NoShapesMessage>No shapes to display</NoShapesMessage>
      ) : (
        <>
          <H2>Sorted Shapes</H2>
          {props.shapes.map((shape, index) => {
            return <ShapeListItem key={index} {...shape} />;
          })}
        </>
      )}
    </ShapeListBody>
  );
};

const mapStateToProps = (state) => {
  return {
    shapes: sortShapes(state.shapes, state.filters),
  };
};

export default connect(mapStateToProps)(ShapeList);
