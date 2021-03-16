import React, {useState} from 'react';
import data from './testimonialData';

import {StyledItem, StyledList, StyledContainer, StyledTitle, StyledHeading } from './style'


const HeadingCard = (props) => {
  const handleClick = () => {
    props.change(props.id)
  }
  return (
    <StyledHeading color={props.color} onClick={handleClick}>
        <h2 className="title-header">{props.heading}</h2>
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
          <div className="identity">
            <h2 className="identity-item">{props.name}</h2>
            <h2 className="identity-item">{props.Office}</h2>
          </div>
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
  console.log(heading)
  console.log(data[heading])
  
  const[content, setContent] = useState(data[heading])
  const [selectedHeading, setSelectedHeading] = useState(items)
  const changeContent = (id) => {
      const nums = Object.keys(data).length
      const items = Array(nums).fill(false, 0, nums)
      //console.log(selectedHeading)
      items[id] = true
      setSelectedHeading(items)
      //console.log(selectedHeading)
      const heading = Object.keys(data)[id]
      setContent(data[heading])
  }
  return(
    <StyledContainer>
      <div className="container">
        <div className="heading">
          <h1>Testimonials</h1>
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