import React from 'react';
import icon1 from '../../images/icon/decadevstrained/icon1.svg';
import icon2 from '../../images/icon/decadevstrained/icon2.svg';
import icon3 from '../../images/icon/decadevstrained/icon3.svg';
import icon4 from '../../images/icon/decadevstrained/icon4.svg';

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
          imgUrl={icon1}
        />
        <DecadevsProfile
          imgUrl={icon2}
        />
        <DecadevsProfile
          imgUrl={icon3}
        />
        <DecadevsProfile
          imgUrl={icon4}
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