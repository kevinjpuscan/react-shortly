import React from "react";
import styled from "styled-components";

export const NavStyled = styled.div`
  .content-nav {
    width: 100%;
    background: var(--dark-violet);
    border-radius: 10px;
    position: absolute;
    top: 2.5em;
    left: 0px;
    right: 0px;
    margin: auto;
    text-align: center;
    color: white;
  }

  .options {
    list-style: none;
    margin: 40px 0px;
    padding: 0;
  }
  .nav-element {
    padding: 0.8em;
    border-radius: 3em;
    margin: 12px 24px;
  }

  .line {
    padding: 0.8em;
    margin: -12px 24px 24px 24px;
    border-bottom: 0.5px solid var(--gray);
  }

  .nav-element-main {
    background: var(--cyan);
  }
`;
function Nav() {
  return (
    <NavStyled>
      <div className="content-nav">
        <ul className="options">
          <li className="nav-element">
            <strong>Features</strong>
          </li>
          <li className="nav-element">
            <strong>Pricing</strong>
          </li>
          <li className="nav-element">
            <strong>Resources</strong>
          </li>
          <li className="line"></li>
          <li className="nav-element">
            <strong>Login</strong>
          </li>
          <li className="nav-element nav-element-main">
            <strong>SingUp</strong>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
}

export default Nav;
