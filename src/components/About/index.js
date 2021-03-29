
import React from 'react';
import about from '../../images/icon/about.png';
import { StyledDiv } from './style';

function AboutCard() {
  return (
    <StyledDiv>
      <div className="container">

        <div className="about-pic">
          <img src={about} alt="card logo" />
        </div>
        
        <div className="about-decagon">
            <h2>About the Institute</h2>
            <p>
              Decagon institute is an <strong> elite software engineering </strong> and
              <strong> leadership training facility </strong> that equips high
              potential individuals with <strong> world-class software engineering </strong> and leadership
              skills, combined with practical exposure throught real-life
              projects and corporate placements. We ensure that our devs are
              enabled to launch their carer in software development
              successfully.
            </p>
            <p>
              Our training program is a <strong> 6-month intensive course </strong> that 
              is a launching pad for a successful career as a software engineer. At the end of the
              program, we guarantee you will become a competitive, industry-ready entry-level to mid level software engineer.
            </p>
            <a href="/program">Learn More &#8594;</a>
        </div>
      </div>
    </StyledDiv>
  )
}

export default AboutCard;