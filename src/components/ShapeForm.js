import React from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  padding: 20px 10px 0px 10px;
`;

export default class ShapeForm extends React.Component {
  // onSubmit = (e) => {
  //   e.preventDefault();

  //   if() {

  //   }
  // };

  render() {
    return (
      <FormContainer>
        <form>
          <input autoFocus placeholder="Side One"></input>
          <input placeholder="Side Two"></input>
          <input placeholder="Side Three"></input>
          <input placeholder="Side Four"></input>
          <button>Create new shape</button>
        </form>
      </FormContainer>
    );
  }
}
