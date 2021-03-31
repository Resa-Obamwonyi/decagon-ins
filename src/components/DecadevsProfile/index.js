import React from 'react';

import icon1 from "../../images/rafi1.png";
import icon2 from "../../images/odira1.png";
import icon3 from "../../images/itunu1.png";
import icon4 from "../../images/kabiru1.png";

import {StyledItem, StyledList, StyledContainer } from './style'


function DecadevsProfile(props) {
  return (
    <StyledItem>
      <div className="logo">
        <img src={props.imgUrl} alt="card logo" />
      </div>
    </StyledItem>
  )
}

const Card = () => (
  <StyledContainer>

    <div className="elements">
    <StyledList>
      <div className="list">
        <DecadevsProfile
          imgUrl={icon4}
        />
        <DecadevsProfile
          imgUrl={icon3}
        />
        <DecadevsProfile
          imgUrl={icon2}
        />
        <DecadevsProfile
          imgUrl={icon1}
        />
      </div>
      
    </StyledList>
    <div className="elements-items">
      <div>
        <h1>350+</h1>
      </div>
      <div>
        <p>Decadevs trained</p>
      </div>
    </div>
  </div>

  </StyledContainer>
)


export default Card;