import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import logoWhite from "../images/logo-white.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

export const FooterStyled = styled.div`
  background: var(--very-dark-violet);

  .content {
    display: grid;
  }

  .group-detail {
    text-align: center;
    font-family: "poppins";
    color: var(--gray);
    font-size: 0.8em;
  }

  .detail-title {
    color: white;
    line-height: 3em;
  }

  .detail-element {
    line-height: 1.2em;
  }
  .logo {
    text-align: center;
    padding: 3em 0em 1em 0em;
  }

  .social-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 5em;
    margin-bottom: 10px;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="logo">
          <img src={logoWhite} alt="logo-white" />
        </div>

        <div className="content">
          <div className="group-detail">
            <p className="detail-title">
              <strong>Features</strong>
            </p>
            <p className="detail-element">Link Shortening</p>
            <p className="detail-element">Branded Links</p>
            <p className="detail-element">Analytics</p>
          </div>
          <div className="group-detail">
            <p className="detail-title">
              <strong>Resources</strong>
            </p>
            <p className="detail-element">Blog</p>
            <p className="detail-element">Developers</p>
            <p className="detail-element">Suport</p>
          </div>
          <div className="group-detail">
            <p className="detail-title">
              <strong>Company</strong>
            </p>
            <p className="detail-element">About</p>
            <p className="detail-element">Our Team</p>
            <p className="detail-element">Careers</p>
            <p className="detail-element">Contact</p>
          </div>

          <div className="social-links">
            <span>
              <img src={iconFacebook} alt="icon-facebook" />
            </span>
            <span>
              <img src={iconTwitter} alt="icon-twitter" />
            </span>
            <span>
              <img src={iconPinterest} alt="icon-pinterest" />
            </span>
            <span>
              <img src={iconInstagram} alt="icon-instagram" />
            </span>
          </div>
        </div>
      </Wrapper>
    </FooterStyled>
  );
}

export default Footer;
