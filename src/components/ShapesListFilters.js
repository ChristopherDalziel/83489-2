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

class ShapesListFilters extends React.Component {
  render() {
    return (
      <Body>
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "Triangles") {
              return this.props.dispatch(sortByTriangles());
            } else if (e.target.value === "Circles") {
              return this.props.dispatch(sortByCircles());
            } else if (e.target.value === "Quadrilaterals") {
              return this.props.dispatch(sortByQuadrilaterals());
            }
          }}
        >
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

export default connect(mapStateToProps)(ShapesListFilters);
