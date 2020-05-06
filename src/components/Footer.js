import React from "react";
import styled from "@emotion/styled";

const FooterDiv = styled.footer`
  margin-top: auto;
  height: 8vh;
  background-color: #e63846;
  border-radius: 100px 0px 0px 0px;
  display: flex;
  align-items: flex-end;
  padding: 2vh;
  float: right;
`;

const Footer = () => {
  return <FooterDiv>Christopher Dalziel</FooterDiv>;
};

export default Footer;
