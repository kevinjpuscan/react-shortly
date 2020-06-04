import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

export const FormStyled = styled.div`
  width: 100%;
  border-radius: 15px;
  height: 160px;
  background: var(--dark-violet);
  margin-top: -220px;
  margin-bottom: 80px;
  background-image: url("/images/bg-shorten-mobile.svg");
  background-size: 80%;
  background-position: 70px -20px;
  background-repeat: no-repeat;

  .input-link {
    width: 90%;
    height: 44px;
    border: none;
    border-radius: 5px;
    margin: 23px 0px;
    font-size: 0.8em;
    font-family: "poppins";
    color: var(--grayish-violet);
    padding: 0px 5%;
    font-weight: bold;
  }

  .btn-shorten {
    width: 100%;
    margin: 0px;
    height: 44px;
    border-radius: 5px;
    background: var(--cyan);
    cursor: pointer;
    display: flex;
    align-items: center;
    color: white;
    font-family: "poppins";
    font-weight: 700;
    justify-content: center;
  }

  .btn-shorten:hover {
    background: var(--cyan-ligth);
  }
`;

function Form() {
  return (
    <FormStyled>
      <Wrapper>
        <input className="input-link" placeholder="Shorten a link here" />
        <div className="btn-shorten">Shorten it!</div>
      </Wrapper>
    </FormStyled>
  );
}

export default Form;
