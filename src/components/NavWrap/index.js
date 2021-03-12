import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import decagon from '../../images/decagon.svg';


const NavWrap=({color}) => {

    return (
      <NavWrapStyle>
        <div className="left-nav">
          <Nav link="/" color={color}>
            <img src={decagon} alt="decagon-logo" />
          </Nav>
          <Nav link="/program" color={color}>
            Our Program
          </Nav>
          <Nav link="/testimonials" color={color}>
            Testimonials
          </Nav>
          <Nav link="/faq" color={color}>
            FAQ
          </Nav>
        </div>

        <div className="right-nav">
          <Nav link="/apply" color={color} className="border-gradient">
            Apply Now
          </Nav>
        </div>
      </NavWrapStyle>
    );
}


export default NavWrap;
