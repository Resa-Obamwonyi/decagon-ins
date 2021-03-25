import React, {useState} from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import decagon from '../../images/decagon.svg';
import dec from '../../images/dec.svg';
import { GiHamburgerMenu } from "react-icons/gi";

const NavWrap = ({ color, location }) => {
  
  const imgFix = () => {
    if (location === "apply") {
      return dec;
    } else {
      return decagon;
    }
  }

  const [show, setShow] = useState({ display: "none" });

  const toggleDisplay = () => {
    show.display === "none"
      ? setShow({ ...show, display: "block" })
      : setShow({ ...show, display: "none"});
  }

    return (
      <NavWrapStyle color={color}>
        <div className="left-nav">
          <Nav link="/" color={color}>
            <img src={imgFix()} alt="decagon-logo" />
          </Nav>
          <Nav link="/program" color={color}>
            Our Program
          </Nav>
          <Nav link="/testimonials" color={color}>
            Testimonials
          </Nav>
          <Nav link="/faq" color={color}>
            FAQs
          </Nav>
        </div>

        <div className="right-nav">
          <Nav link="/apply" color={color} className="border-gradient">
            Apply Now
          </Nav>
        </div>

        <div className="ham-menu">
          <div className="menu-logo">
            <Nav link="/" color={color}>
              <img src={imgFix()} alt="decagon-logo" />
            </Nav>
          </div>

          <div className="menu">
            <GiHamburgerMenu className="menu-icon" onClick={toggleDisplay} />
          </div>
        </div>

        <div className="mobile-nav-menu" style={{ display: show.display }}>
          <Nav link="/program" color={color}>
            Our Program
          </Nav>
          <Nav link="/testimonials" color={color}>
            Testimonials
          </Nav>
          <Nav link="/faq" color={color}>
            FAQs
          </Nav>
          <Nav link="/apply" color={color}>
            Apply
          </Nav>
        </div>
      </NavWrapStyle>
    );
}


export default NavWrap;
