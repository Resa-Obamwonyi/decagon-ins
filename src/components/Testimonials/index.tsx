import React, {useState} from 'react';
import data, {dataTypeKeys} from './testimonialData';

import {StyledItem, StyledList, StyledContainer, StyledTitle, StyledHeading } from './style'


const HeadingCard = (props: any) => {
  const handleClick = () => {
    props.change(props.id)
  }
  return (
    <StyledHeading color={props.color} onClick={handleClick}>
        <h3 className="title-header">{props.heading}</h3>
    </StyledHeading>
  )
}

function Card(props: any) {
  return (
    <StyledItem>
      <div className="logo">
        <img src={props.imgUrl} alt="card logo" />
      </div>
      <div className="description">
        <div className="identity">
          <div className="identity-item">
            <h4>{props.name} <br/> {props.Office}</h4>
          </div>
        </div>
        <p>{props.review}</p>
      </div>
    </StyledItem>
  );
}

const Testimonials = () => {
  
  const number = Object.keys(data).length
  const items = Array(number).fill(false, 0, number)
  items[0] = true
  
  const heading = Object.keys(data)[0]
  // @ts-ignore
  const[content, setContent] = useState(data[heading])

  const [selectedHeading, setSelectedHeading] = useState(items)
  
  const changeContent = (id: number) => {
      const nums = Object.keys(data).length
      const items = Array(nums).fill(false, 0, nums)
      items[id] = true
      setSelectedHeading(items)
      const heading = Object.keys(data)[id]
      // @ts-ignore
     setContent(data[heading])
  }
  return(
    <StyledContainer>
      <div className="container">
        <div className="heading">
          <h1>Testimonials</h1>
        </div>
        
        <StyledTitle>
          {Object.keys(data).map((item, index: number) => (
            <HeadingCard
              id={index} 
              heading={data[item as dataTypeKeys].heading}
              change={changeContent}
              color={selectedHeading[index]}
            />
              ))}
        </StyledTitle>
        <StyledList>
          {content.content.map((item: any, index: any) => (
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