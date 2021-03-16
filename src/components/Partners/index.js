import React from 'react';
import icon1 from '../../images/icon/partners/icon1.svg';
import icon2 from '../../images/icon/partners/icon2.svg';
import icon3 from '../../images/icon/partners/icon3.svg';
import icon4 from '../../images/icon/partners/icon4.svg';
import icon5 from '../../images/icon/partners/icon4.svg';
import icon6 from '../../images/icon/partners/icon4.svg';


import {StyledItem, StyledList, StyledContainer } from './style'


function Partner(props) {
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
    <div className="elements-items">
      <div>
        <h1>Our Partners</h1>
      </div>
      <div>
        <p>We have been working with amazing
          educational partners and clients</p>
      </div>
    </div>
    <StyledList>
      <div className="list">
        <Partner
          imgUrl={icon1}
        />
        <Partner
          imgUrl={icon2}
        />
        <Partner
          imgUrl={icon3}
        />
        <Partner
          imgUrl={icon4}
        />
        <Partner
          imgUrl={icon5}
        />
        <Partner
          imgUrl={icon6}
        />
      </div>
      
    </StyledList>
  </div>

  </StyledContainer>
)


export default Card;