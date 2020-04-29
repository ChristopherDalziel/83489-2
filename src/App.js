import React from "react";
import { connect } from "react-redux";
import ShapesList from "./components/ShapesList";
import ShapesListFilters from "./components/ShapesListFilters";

class App extends React.Component {
  state = {
    sideOne: "",
    sideTwo: "",
    sideThree: "",
    sideFour: "",
  };

  render() {
    return (
      <div>
        <h1>Unnamed Project</h1>
        <ShapesListFilters />
        <ShapesList />
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
