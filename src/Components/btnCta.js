import React from "react";
import styled from "styled-components";

export const BtnCtaStyled = styled.strong`
  padding: 13px 45px;
  border-radius: 25px;
  background: var(--cyan);
  color: white;
`;

function BtnCta({ text }) {
  return <BtnCtaStyled>{text}</BtnCtaStyled>;
}

export default BtnCta;
