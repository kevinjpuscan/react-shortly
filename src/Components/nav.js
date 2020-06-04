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
    cursor: pointer;
  }

  .line {
    padding: 0.8em;
    margin: -12px 24px 24px 24px;
    border-bottom: 0.5px solid var(--gray);
  }

  .nav-element-main {
    background: var(--cyan);
    color: white;
    cursor: pointer;
  }
  .nav-element:hover {
    color: black;
  }
  .nav-element-main:hover {
    background: var(--cyan-ligth);
    color: white;
  }

  @media (min-width: 1200px) {
    width: 100%;
    .content-nav {
      background: white;
      border-radius: 0px;
      top: 0;
      position: relative;
      text-align: left;
      color: gray;
      display: flex;
      justify-content: space-between;
    }

    .options {
      display: flex;
      margin: 0;
    }
    .options-left {
      justify-content: flex-start;
      grid-column: 1;
    }

    .options-right {
      justify-content: end-start;
      grid-column: 4;
    }

    .nav-element {
      margin: 0;
      font-size: 0.9em;
      padding: 0.5em 1.3em;
      cursor: pointer;
    }

    .line {
      display: none;
    }
  }
`;
function Nav() {
  return (
    <NavStyled>
      <div className="content-nav">
        <ul className="options options-left">
          <li className="nav-element">
            <strong>Features</strong>
          </li>
          <li className="nav-element">
            <strong>Pricing</strong>
          </li>
          <li className="nav-element">
            <strong>Resources</strong>
          </li>
        </ul>

        <ul className="options options-right">
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
