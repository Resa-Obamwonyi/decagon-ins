import React from 'react';
import { StyledDiv } from './style';
import Button from "../Button";
import background from '../../images/icon/banner/background.png'


function Banner() {
  return (
    <StyledDiv>
      <div class="background-container" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat"
      }}>
        <div class="left">
          {/* <div class="content"> */}
            <h1>Launch your career in software engineering.</h1>
            <p>
              Decagon is an immersive software engineering experience that
              produces industry-ready software engineers within 6 months.
            </p>
            <Button link={"/apply"}>
              Apply Now
            </Button>
          {/* </div> */}
          </div>
        </div>
    </StyledDiv>
  )
}

<Button link={"/apply"}>
  Apply Now
</Button>

export default Banner;