import React from 'react';
import { StyledDiv } from './style';
import background from '../../images/icon/banner/background.svg';
import gradientbackground from '../../images/icon/banner/gradient-background.svg';


function Banner() {
  return (
    <StyledDiv>
      <div>
        <div className="OverlayContent">
          <div className="background-image">
            <img src={background} alt="background"/>
          </div>
          <div className="banner-content">
            <h2>Launch your career in software engineering.</h2>
            <p>Decagon is an immersive software engineering experience that produces industry-ready software engineers within 6 months.</p>
            <button>Apply Now</button>
          </div>
        </div>
        <div className="gradient-image">
          <img src={gradientbackground} alt="gradient"/>
        </div>
      </div>
    </StyledDiv>

  )
}

export default Banner;