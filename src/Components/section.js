import React from "react";
import styled from "styled-components";
import BtnCta from "./btnCta";
import bgBoostMobile from "../images/bg-boost-mobile.svg";
import bgBoostDesktop from "../images/bg-boost-desktop.svg";

export const SectionStyled = styled.div`
  height: 300px;
  background: var(--dark-violet);
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.image});
  background-size: cover;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  .text {
    font-family: "poppins";
    font-size: 1.5em;
    color: white;
  }

  @media (min-width: 1200px) {
    background-image: url(${props => props.imageDesktop});
  }
`;

function Section() {
  return (
    <SectionStyled image={bgBoostMobile} imageDesktop={bgBoostDesktop}>
      <div className="content">
        <p className="text">
          <strong>Boost your links today</strong>
        </p>
        <div>
          <BtnCta text="Get Started" />
        </div>
      </div>
    </SectionStyled>
  );
}

export default Section;
