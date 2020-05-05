import React from "react";
import { connect } from "react-redux";
import ShapesList from "./components/ShapesList";
import ShapesListFilters from "./components/ShapesListFilters";
import Header from "./components/Header";
import AddShapeDiv from "./components/AddShapeDiv";

class App extends React.Component {
  state = {
    sideOne: "",
    sideTwo: "",
    sideThree: "",
    sideFour: "",
  };

  render(props) {
    return (
      <div>
        <Header />
        <AddShapeDiv />
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

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(App);
