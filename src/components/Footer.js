import React from "react";
import styled from "@emotion/styled";

const FooterDiv = styled.footer`
  margin-top: auto;
  height: 6vh;
  background-color: #e63846;
  border-radius: 50px 0px 0px 0px;
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
        rel="noopener noreferrer"
        class="fab fa-github-square socials"
        id="footerLink"
      >
        <span>Link to projects GitHub repository</span>
      </a>
    </FooterDiv>
  );
};

export default Footer;
