import React from 'react';
import finance from '../../images/icon/finance.svg';
import location from '../../images/icon/location.svg';
import {StyledDiv, StyledList, StyledTitle, StyledContainer} from './style';


function Highlight(props) {
  return (
    <StyledDiv>
      <div className="highlight-item">
        <div className="logo">
          <img src={props.imgUrl} alt="card logo" />
        </div>
        <div>
          <h2>{props.heading}</h2>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </StyledDiv>
  )
}

const Card = () => (
  <StyledContainer>
    <div className="container">
      <StyledTitle>
        <h1 className="heading">Why Decagon is the #1<br/> choice for you</h1>
      </StyledTitle>
      <StyledList>
        <div className="list">
        <Highlight 
          heading="We give you all you need to excel"
          description="We offer accommodation | Feeding | Laptop | Electricity | Internet | 
                      and monthly stipend for the 6 months duration."
          imgUrl = {location}
        />
        <Highlight 
          heading="Flexible financing option"
          description="We have different payment options which can
                      allow you pay us after you graduate and secure a job."
          imgUrl = {finance}
        />
      </div>
      </StyledList>
    </div>
  </StyledContainer>
)

export default Card;