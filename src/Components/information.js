import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Card from "./card";
import Form from "./form";
import icon01 from "../images/icon-detailed-records.svg";
import icon02 from "../images/icon-detailed-records.svg";
import icon03 from "../images/icon-fully-customizable.svg";
import ResultList from "./resultList";

export const InformationStyled = styled.div`
  text-align: center;
  background: var(--background);
  padding: 8em 0em 1em 0em;

  h1 {
    margin: 1em 0em;
    line-height: 1.2em;
    font-size: 1.5em;
    font-weight: 700;
    color: var(--very-dark-violet);
  }

  .description {
    color: var(--grayish-violet);
    margin: 0;
    font-size: 0.9em;
    line-height: 1.5em;
    font-weight: bold;
  }

  @media (min-width: 1200px) {
    .description {
      width: 50%;
      margin: auto;
      font-size: 1.1em;
      font-weight: 900;
    }
    h1 {
      font-size: 2.5em;
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
    }
  }
`;

function Information() {
  return (
    <InformationStyled>
      <Wrapper>
        <Form />
        <ResultList />
        <h1>Advanced Statistics</h1>
        <p className="description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="card-list">
          <Card
            icon={icon01}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            marginTop="6em"
            icon={icon02}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions."
          />
          <Card
            marginTop="7em"
            className="margin-2"
            icon={icon03}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement."
          />
        </div>
      </Wrapper>
    </InformationStyled>
  );
}

export default Information;
