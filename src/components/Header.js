import React from "react";
import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  padding: 0;
  margin: 0;
  background-color: #e63846;
  height: 10vh;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0px 10px 0px 10px;
`;

const H3 = styled.h3`
  margin: 0;
  padding: 0px 10px 0px 10px;
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <H1>{props.title}</H1>
      {props.subTitle && <H3>{props.subTitle}</H3>}
    </HeaderDiv>
  );
};

Header.defaultProps = {
  title: "Unnamed Application",
  subTitle: "Let us sort your shapes",
};

export default Header;
