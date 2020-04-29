import React from "react";
import { connect } from "react-redux";
import { sortByTriangles, sortByCircles } from "../actions/filters";

class ShapesListFilters extends React.Component {
  render() {
    return (
      <div>
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "triangles") {
              return this.props.dispatch(sortByTriangles());
            } else if (e.target.value === "circles") {
              return this.props.dispatch(sortByCircles());
            }
          }}
        >
          <option value="triangles">triangles</option>
          <option value="circles">circles</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ShapesListFilters);
