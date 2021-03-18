import React, {useState} from 'react';
import data from './testimonialData';

import {StyledItem, StyledList, StyledContainer, StyledTitle, StyledHeading } from './style'


const HeadingCard = (props) => {
  const handleClick = () => {
    props.change(props.id)
  }
  return (
    <StyledHeading color={props.color} onClick={handleClick}>
        <h1 className="title-header">{props.heading}</h1>
    </StyledHeading>
  )
}

function Card(props) {
  return (
    <StyledItem>
      <div className="highlight-item">
        <div className="logo">
            <img src={props.imgUrl} alt="card logo" />
        </div>
        <div className="description">
          <h2>{props.name}</h2>
          <h2>{props.Office}</h2>
          <p>{props.review}</p>
        </div>
      </div>
    </StyledItem>
  )
}

const Testimonials = () => {
  
  const number = Object.keys(data).length
  const items = Array(number).fill(false, 0, number)
  items[0] = true
  
  const heading = Object.keys(data)[0]
  const[content, setContent] = useState(data[heading])
  const [selectedHeading, setSelectedHeading] = useState(items)
  const changeContent = (id) => {
      const nums = Object.keys(data).length
      const items = Array(nums).fill(false, 0, nums)
      items[id] = true
      setSelectedHeading(items)
      const heading = Object.keys(data)[id]
      setContent(data[heading])
  }
  return(
    <StyledContainer>
      <div className="container">
        <div className="heading">
          <h1 >Testimonials</h1>
        </div>
        
        <StyledTitle>
          {Object.keys(data).map((item, index) => (
            <HeadingCard
              id={index} 
              heading={data[item].heading}
              change={changeContent}
              color={selectedHeading[index]}
            />
              ))}
        </StyledTitle>
        <StyledList>
          {content.content.map((item, index) => (
            <Card 
              imgUrl={item.imgUrl}
              name={item.name}
              Office={item.office}
              review={item.review}
            />
          ))}
        </StyledList>
  </div>
    </StyledContainer>
  )
}

export default Testimonials;