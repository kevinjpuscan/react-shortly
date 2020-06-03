import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

export const HeaderStyled = styled.div`
  padding: 2em 0em 0.5em 0em;
  position: fixed;
  background: white;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  .content-header {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .icon-menu {
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content-header">
          <img src="/images/logo.svg" alt="logo" />
          <span className="icon-menu">
            <img src="/images/menu.svg" alt="icon-menu" />
          </span>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
