import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import BtnCta from "./btnCta";
import imgBanner from "../images/illustration-working.svg";

export const MainStyled = styled.div`
  min-height: 100vh;
  font-family: "poppins";
  text-align: center;
  padding-bottom: 8em;

  .content {
    display: grid;
    grid-gap: 30px;
  }

  .img-banner {
    margin-top: 5em;
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 130%;
    margin-left: 20px;
  }

  h1 {
    margin: 0;
    line-height: 1.2em;
    font-size: 2em;
    color: var(--very-dark-violet);
  }

  .description {
    color: var(--grayish-violet);
  }

  .btn-content {
    margin: 1.9em 0em;
  }

  @media (min-width: 1200px) {
    .content {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      grid-template-rows: auto;
      grid-column-gap: 30px;
      height: auto;
    }
    .description-content {
      margin-top: 7em;
      grid-column: 1;
      grid-row: 1;
      text-align: left;
    }

    .description-content h1 {
      font-size: 3em;
    }

    .description {
      font-size: 1.3em;
    }

    .img-banner {
      grid-column: 2;
      grid-row: 1;
    }

    .img-banner {
      margin-top: 7em;
    }
    img {
      width: 120%;
      margin-left: 0px;
    }
  }
`;

function Main() {
  return (
    <MainStyled>
      <div className="content">
        <div className="img-banner">
          <img src={imgBanner} alt="img-main" />
        </div>

        <Wrapper>
          <div className="description-content">
            <h1>More that just shorter Links</h1>
            <p className="description">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="btn-content">
              <BtnCta text="Get Started" />
            </div>
          </div>
        </Wrapper>
      </div>
    </MainStyled>
  );
}

export default Main;
