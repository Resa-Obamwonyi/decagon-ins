import React from "react";
import { FooterStyle } from "./style";
import Nav from '../Nav';
import decagon from '../../images/decagon.svg';
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <FooterStyle>
      <div className="upper-footer">
        <div className="logo">
          <img src={decagon} alt="decagon-logo" />
        </div>
        <div className="footer-nav">
          <Nav link="/program">Our Program</Nav>
          <Nav link="/testimonials">Testimonials</Nav>
          <Nav link="/faq">FAQs</Nav>
        </div>
      </div>
      <hr />

      <div className="lower-footer">
        <p className="copyright">
          © 2021 Decagon Institute. All rights reserved
        </p>
        <div className="socials">
          <a href="https://www.instagram.com/decagonhq/">
            <FiInstagram className="social-link" />
          </a>
          <a href="https://twitter.com/DecagonIns">
            <FaTwitter className="social-link" />
          </a>
          <a href="https://www.youtube.com/channel/UCCXDCRPka5mGokpPUn2FFpQ">
            <FaYoutube className="social-link" />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
