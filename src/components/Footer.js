import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #292c32;
  padding: 50px 0 30px 0;
  margin-top: 50px;
`;

const SocialIconsContainer = styled.div`
  max-width: 350px;
  margin: auto;
  text-align: center;

  i {
    margin: 0 40px;
    color: #5c99f8;
  }
`;

const LinkContainer = styled.div`
  &.ui.grid {
    margin: 20px 0;
  }

  .link {
    opacity: 0.6;
    color: white;
    margin: auto;
    padding-bottom: 1em;
  }

  .column:nth-of-type(3) {
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }
`;

const StyledButton = styled.div`
  &.ui.button {
    width: 165px;
    height: 40px;
    border-radius: 8px;
    color: #486ea8;
    background-color: #292c32;
    border: 1px solid gray;
    text-align: left;
    font-family: inherit;
  }
`;

const MobileButtonContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: inline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer className="ui">
      <SocialIconsContainer>
        <i className="twitter icon large" />
        <i className="linkedin icon large" />
        <i className="instagram icon large" />
      </SocialIconsContainer>
      <LinkContainer className="ui equal width grid">
        <div className="column">
          <div className="ui link">Claim Your Venue</div>
          <div className="ui link">Venue Log In</div>
        </div>
        <div className="column">
          <div className="ui link">Terms and Condition</div>
          <div className="ui link">Privacy Policy</div>
        </div>
        <div className="column">
          <StyledButton className="ui button">Default</StyledButton>
        </div>
      </LinkContainer>
      <MobileButtonContainer className="column">
        <StyledButton className="ui button">Default</StyledButton>
      </MobileButtonContainer>
    </FooterContainer>
  );
};

export default Footer;
