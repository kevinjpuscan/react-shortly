import React from "react";
import styled from "styled-components";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import { connect } from "react-redux";
import * as types from "../store/types";

export const FormStyled = styled.div`
  width: 100%;
  border-radius: 15px;
  height: auto;
  background: var(--dark-violet);
  margin-top: -220px;
  margin-bottom: 80px;
  background-image: url(${bgShortenMobile});
  background-size: 80%;
  background-position: 70px -20px;
  background-repeat: no-repeat;

  .content-form {
    padding: 22px;
  }

  .input-link {
    width: 100%;
    height: 44px;
    border: ${props => (props.alert ? "4px solid #e7666b" : "none")};
    border-radius: 5px;
    font-size: 0.8em;
    font-family: "poppins";
    color: var(--grayish-violet);
    font-weight: bold;
    box-sizing: border-box;
    padding: 22px;
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
    margin-top: 22px;
  }

  .btn-shorten:hover {
    background: var(--cyan-ligth);
  }

  .alert {
    color: #e7666b;
    text-align: left;
    font-family: "poppins";
    font-size: 0.7em;
    margin-top: 0.5em;
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: 1200px) {
    margin-top: -210px;
    background-image: url(${bgShortenDesktop});
    background-size: 100%;
    background-position: 0;
    .content-form {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-column-gap: 44px;
      padding: 44px;
    }
    .alert {
      grid-column: 1;
      grid-row: 2;
    }
    .input-link {
      width: calc(100%-40px);
      height: 50px;
    }
    .btn-shorten {
      margin: 0px;
      width: 100%;
      height: 50px;
    }
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      alert: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getShortLink = this.getShortLink.bind(this);
  }

  handleChange = event => {
    this.setState({ text: event.target.value, alert: null });
  };

  handleClick = () => {
    if (this.state.text.replace(/ /g, "") === "") {
      this.setState({ alert: "Please add a Link" });
    } else {
      this.getShortLink(this.state.text);
    }
  };

  getShortLink = async url => {
    let result = await fetch("https://rel.ink/api/links/", {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ url }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (Number(result.status) === 201) {
      let shortLink = await result.json();
      this.props.dispatch({ type: types.ADD_LINK, payload: shortLink });
    }
  };

  render() {
    return (
      <FormStyled alert={this.state.alert}>
        <div className="content-form">
          <input
            className="input-link"
            name="input-link"
            placeholder="Shorten a link here"
            value={this.state.text}
            onChange={this.handleChange}
          />
          {this.state.alert && <div className="alert">{this.state.alert}</div>}

          <div className="btn-shorten" onClick={this.handleClick}>
            Shorten it!
          </div>
        </div>
      </FormStyled>
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
)(Form);
