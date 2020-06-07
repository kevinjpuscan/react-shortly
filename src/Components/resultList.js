import React from "react";
import styled from "styled-components";
import LinkResult from "./linkResult";
import { connect } from "react-redux";

export const ResultListStyled = styled.div`
  display: grid;
  gap: 30px;
  margin: -50px 0px 100px 0px;
`;
class ResultList extends React.Component {
  render() {
    return (
      <ResultListStyled>
        {this.props.shortLinks.map(({ url, hashid }) => (
          <LinkResult key={hashid} url={url} shortUrl={hashid} isCopy={false} />
        ))}
      </ResultListStyled>
    );
  }
}
const mapStateToProps = state => {
  return {
    shortLinks: state.shortLinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultList);
