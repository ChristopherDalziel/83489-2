import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo.png";

const HeaderDiv = styled.div`
  padding: 0;
  margin: 0;
  background-color: #e63846;
  height: 10vh;
  border-radius: 0px 0px 100px 0px;
  box-shadow: 17px 14px 17px -11px rgba(0, 0, 0, 0.2);
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0px 10px 0px 10px;
  width: 30vw;
  @media (max-width: 815px) {
    font-size: 25px;
    width: 75vw;
  }
`;

const H3 = styled.h3`
  margin: 0;
  padding: 0px 10px 0px 10px;
  @media (max-width: 815px) {
    font-size: 12px;
    width: 75vw;
  }
`;

const LogoSmall = styled.img`
  height: 75px;
  float: right;
  @media (max-width: 815px) {
    height: 40px;
  }
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <H1>
        {props.title}
        <LogoSmall src={logo} />
      </H1>

      {props.subTitle && <H3>{props.subTitle}</H3>}
    </HeaderDiv>
  );
};

Header.defaultProps = {
  title: "Shape Sorter Online",
  subTitle: "Leave your shape sorting to a computer",
};

export default Header;
