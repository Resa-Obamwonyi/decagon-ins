import React from 'react';
import access from '../../images/icon/brand-logo/access.jpg';
import seamfix from '../../images/icon/brand-logo/seamfix.jpg';
import cowrywise from '../../images/icon/brand-logo/cowrywise.jpg';
import piggyvest from '../../images/icon/brand-logo/piggyvest.jpg';
import mastercard from '../../images/icon/brand-logo/mastercard.jpg';
import farmcrowdy from '../../images/icon/brand-logo/farmcrowdy.jpg';

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

          <div className="list-item">
            <Partner
            imgUrl={access}
            />
            <Partner
              imgUrl={seamfix}
            />
            <Partner
              imgUrl={cowrywise}
            />
          </div>

          <div className="list-item">
            <Partner
            imgUrl={piggyvest}
            />
            <Partner
              imgUrl={mastercard}
            />
            <Partner
              imgUrl={farmcrowdy}
            />
          </div>

        </div>
        
      </StyledList>
  </div>

  </StyledContainer>
)


export default Card;