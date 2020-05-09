import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import {
  sortByTriangles,
  sortByCircles,
  sortByQuadrilaterals,
} from "../actions/filters";

const Body = styled.div`
  margin: 10px;
`;

class ShapeListFilters extends React.Component {
  onSortChange = (e) => {
    if (e.target.value === "Triangles") {
      return this.props.sortByTriangles();
    } else if (e.target.value === "Circles") {
      return this.props.sortByCircles();
    } else if (e.target.value === "Quadrilaterals") {
      return this.props.sortByQuadrilaterals();
    }
  };

  render() {
    return (
      <Body>
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="Triangles">Triangles</option>
          <option value="Circles">Circles</option>
          <option value="Quadrilaterals">Quadrilaterals</option>
        </select>
      </Body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortByTriangles: () => dispatch(sortByTriangles()),
    sortByCircles: () => dispatch(sortByCircles()),
    sortByQuadrilaterals: () => dispatch(sortByQuadrilaterals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShapeListFilters);
