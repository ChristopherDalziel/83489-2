import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo.png";

const HeaderDiv = styled.header`
  padding: 0;
  margin: 0;
  background-color: #e63846;
  height: 11vh;
  border-radius: 0px 0px 50px 0px;
  box-shadow: 17px 14px 17px -11px rgba(0, 0, 0, 0.2);
  @media (max-width: 815px) {
    border-radius: 0px;
    font-size: 25px;
    height: 10vh;
  }
`;

const Title = styled.h1`
  margin: 0 0 5px 0;
  padding: 0px 10px 0px 10px;
  width: 30vw;
  @media (max-width: 815px) {
    margin-bottom: 5px;
    font-size: 25px;
    width: 75vw;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  width: 20.75vw;
  background-color: black;
  padding: 5px 10px 5px 10px;
  border-radius: 0px 50px 50px 0px;
  @media (max-width: 815px) {
    padding: 5px
    border-radius: 0px;
    font-size: 12px;
    width: 100vw;
  }
`;

const LogoSmall = styled.img`
  height: 90px;
  float: right;
  transition: transform 0.2s;
  :hover {
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  @media (max-width: 815px) {
    visibility: hidden;
  }
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <Title>
        {props.title}
        <LogoSmall src={logo} alt="Site logo" />
      </Title>

      {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
    </HeaderDiv>
  );
};

Header.defaultProps = {
  title: "Shape Sorter Online",
  subTitle: "Leave your shape sorting to a computer",
};

export default Header;
