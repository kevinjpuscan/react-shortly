import React from "react";
import styled from "styled-components";
import BtnCta from "./btnCta";

export const SectionStyled = styled.div`
  height: 300px;
  background: var(--dark-violet);
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url("/images/bg-boost-mobile.svg");
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
`;

function Section() {
  return (
    <SectionStyled>
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
