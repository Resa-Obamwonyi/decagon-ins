import React from 'react';
import {NavWrapStyle} from './style';
import Nav from '../Nav';
import decagon from '../../images/decagon.svg';
import Button from '../Button';


const NavWrap=() => {

    return (
      <NavWrapStyle>
        
        <div className="left-nav">
          <Nav link="/">
            <img src={decagon} alt="decagon-logo" />
          </Nav>
          <Nav link="/program">Our Program</Nav>
          <Nav link="/testimonials">Testimonials</Nav>
          <Nav link="/faq">FAQ</Nav>
        </div>

        <div className="right-nav">
          <Nav link="/apply" className="border-gradient">
            Apply Now
          </Nav>
        </div>
        {/* <Button link="/apply" width="150px" className="btn border-gradient">
          Apply Now
        </Button> */}
      </NavWrapStyle>
    );
}


export default NavWrap;
