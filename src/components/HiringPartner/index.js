import React from 'react';
import access from '../../images/icon/brand-logo/access.jpg';
import seamfix from '../../images/icon/brand-logo/seamfix.jpg';
import cowrywise from '../../images/icon/brand-logo/cowrywise.jpg';
import piggyvest from '../../images/icon/brand-logo/piggyvest.jpg';
import mastercard from '../../images/icon/brand-logo/mastercard.jpg';
import farmcrowdy from '../../images/icon/brand-logo/farmcrowdy.jpg';


import {StyledItem, StyledList, StyledContainer} from './style'


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
          <h1>Our Hiring Partner</h1>
        </div>
        <div>
          <p>At Decagon Institute, we believe the decision you make to invest in your future is worth it!
            One of the ways we ensure this, is by providing our decadevs with the opportunity to intern and 
            potentially transition to a full-time career as a software engineer/developer with any of our 
            reputable hiring partners
          </p>
        </div>
      </div>
      <StyledList>
        <div className="list">
          <div className="list-items">
              <Partner
            imgUrl={access}
            />
            <Partner
              imgUrl={seamfix}
            />
            <Partner
              imgUrl={cowrywise}
            />
            <Partner
              imgUrl={piggyvest}
            />
          </div>
            
          <div className="list-items">

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