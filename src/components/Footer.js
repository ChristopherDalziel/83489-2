import React from "react";
import styled from "@emotion/styled";

const FooterDiv = styled.footer`
  margin-top: auto;
  height: 5vh;
  background-color: #e63846;
  border-radius: 100px 0px 0px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2vh;
  font-size: 50px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <a
        target="_blank"
        href="https://github.com/ChristopherDalziel/83489-2"
        class="fab fa-github-square socials"
        id="footerLink"
      ></a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/christopher-dalziel-129427187/"
        class="fab fa-linkedin socials"
        id="footerLink"
      ></a>
    </FooterDiv>
  );
};

export default Footer;
