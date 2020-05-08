import React from "react";
import { connect } from "react-redux";
import ShapeList from "./components/ShapeList";
import ShapeListFilters from "./components/ShapeListFilters";
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
        <ShapeListFilters />
        <ShapeList />
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

export default connect(mapStateToProps)(App);
