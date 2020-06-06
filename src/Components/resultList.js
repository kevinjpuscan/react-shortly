import React from "react";
import styled from "styled-components";
import LinkResult from "./linkResult";

export const ResultListStyled = styled.div`
  display: grid;
  gap: 30px;
  margin: -50px 0px 100px 0px;
`;
function ResultList() {
  return (
    <ResultListStyled>
      <LinkResult url="test" shortUrl="corta" isCopy={true} />
      <LinkResult url="test" shortUrl="corta" isCopy={true} />
      <LinkResult url="test" shortUrl="corta" isCopy={true} />
    </ResultListStyled>
  );
}

export default ResultList;
