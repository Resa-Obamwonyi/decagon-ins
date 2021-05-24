import React from 'react';
import atlassian from '../../images/icon/partners/atlassian.png';
import microsoft from '../../images/icon/partners/microsoft.png';
import github from '../../images/icon/partners/github.png';

import {StyledItem, StyledList, StyledContainer } from './style'


function Partner(props: any) {
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
          <h1>Our Educational Partners</h1>
        </div>
        <div>
          <p>At Decagon Institute, we take pride in ensuring we provide the best local
            and global educational partners for our students.</p>
        </div>
      </div>
      <StyledList>
        <div className="list">

            <Partner
            imgUrl={atlassian}
            />
            <Partner
              imgUrl={microsoft}
            />
            <Partner
              imgUrl={github}
            />

        </div>
        
      </StyledList>
  </div>

  </StyledContainer>
)


export default Card;