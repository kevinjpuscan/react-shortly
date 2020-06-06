import React from "react";
import styled from "styled-components";

export const LinkResultStyled = styled.div`
  background-color: white;
  border-radius: 10px;
  font-family: "poppins";
  font-weight: 500;

  .url-header {
    padding: 0.7em 1em;
    border-bottom: 1px solid var(--background);
    text-align: left;
  }
  .url-content {
    padding: 0em 1em 1em 1em;
  }

  .short-url {
    text-align: left;
    padding: 0.8em 0em;
    color: var(--cyan);
  }
  .btn-copied {
    padding: 0.5em;
    background: var(--cyan);
    color: white;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 40px;

    .url-header {
    }
    .url-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-column-gap: 20px;
      padding: 0 20px;
    }
    .short-url {
    }

    .content-btn-copied {
      align-self: center;
    }
    .btn-copied {
      padding: 0.5em 1.5em;
      font-size: 0.75em;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
`;

function LinkResult({ url, shortUrl, isCopy }) {
  return (
    <LinkResultStyled>
      <div className="url-header">{url}</div>
      <div className="url-content">
        <div className="short-url">{shortUrl}</div>
        <div className="content-btn-copied">
          <div className="btn-copied">{isCopy ? "Copied!" : "Copy"}</div>
        </div>
      </div>
    </LinkResultStyled>
  );
}

export default LinkResult;
