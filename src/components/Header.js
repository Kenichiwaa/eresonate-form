import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-bottom: 0;
  background-color: #292c32;
  color: white;
  height: 80px;
  text-align: center;
`;

const StyledIcon = styled.i`
  padding-top: 10px;
  color: #367cf7;
  right: -15px;
  position: relative;
`;

const StyledSearchIcon = styled.i`
  &.big.icon {
    float: right;
    top: 28px;
    position: relative;
    right: 10%;
  }
`;

const Header = () => {
  const onSearchClick = () => {
    console.log("Search Clicked");
  };
  return (
    <HeaderContainer>
      <StyledIcon className=" icon huge circle" />
      <StyledSearchIcon className="icon search big" onClick={onSearchClick} />
    </HeaderContainer>
  );
};

export default Header;
