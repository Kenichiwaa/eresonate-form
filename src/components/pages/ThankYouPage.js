import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  &.ui.section {
    color: white;
    max-width: 400px;
    margin: auto;
    padding-top: 40px;
    font-size: 2em;
    text-align: center;
    line-height: 2;
  }
`;

const ThankYouPage = () => {
  return (
    <StyledSection className="ui section">
      Thank you for reporting a problem.
    </StyledSection>
  );
};

export default ThankYouPage;
