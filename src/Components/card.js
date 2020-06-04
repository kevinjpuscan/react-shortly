import React from "react";
import styled from "styled-components";

export const CardStyled = styled.div`
  width: 100%;
  height: auto;
  background: white;
  border-radius: 15px;
  position: relative;
  margin: 5em 0em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.035);

  .content {
    padding: 3em 1.5em 2em 1.5em;
  }

  .icon {
    position: absolute;
    top: -2.5em;
    left: 0;
    right: 0;
    margin: auto;
  }

  img {
    padding: 1.3em;
    border-radius: 50%;
    background: var(--dark-violet);
  }

  .title {
    margin: 1em 0em;
    line-height: 1.2em;
    font-size: 1.3em;
    font-weight: 700;
    color: var(--dark-violet);
  }

  .description-card {
    color: var(--grayish-violet);
    margin: 0;
    font-size: 0.9em;
    line-height: 1.6em;
    font-weight: 700;
  }

  @media (min-width: 1200px) {
    margin-top: ${props => props.marginTop};
  }
`;

function Card({ icon, title, description, marginTop }) {
  return (
    <CardStyled marginTop={marginTop}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description-card">{description}</p>
      </div>
    </CardStyled>
  );
}

export default Card;
