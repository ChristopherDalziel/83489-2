import React from "react";
import { connect } from "react-redux";
import { sortByTriangles, sortByCircles } from "./actions/filters";

class App extends React.Component {
  state = {
    sideOne: "",
    sideTwo: "",
    sideThree: "",
    sideFour: "",
  };

  // addShape = () => {};

  // sortShape = () => {};

  render() {
    return (
      <div>
        <h1>Part 2</h1>
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

export default connect(mapStateToProps)(App);
