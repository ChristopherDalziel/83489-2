import React from "react";
import { connect } from "react-redux";
import ShapesList from "./components/ShapesList";
import ShapesListFilters from "./components/ShapesListFilters";
import Header from "./components/Header";
import AddShapeDiv from "./components/AddShapeDiv";
import Footer from "./components/Footer";
import styled from "@emotion/styled";

const ApplicationDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class App extends React.Component {
  state = {
    sideOne: "",
    sideTwo: "",
    sideThree: "",
    sideFour: "",
  };

  render(props) {
    return (
      <ApplicationDiv>
        <Header />
        <AddShapeDiv />
        <ShapesListFilters />
        <ShapesList />
        <Footer />
      </ApplicationDiv>
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
