import React, {useState} from 'react';

import {StyledItem, StyledContainer, StyledTitle, StyledHeading } from './style'

const data = [
  {
    heading: "Learn first, Pay later",
    description: "At Decagon, bridging the gap between the best talent and the best opportunities in tech is our priority. We believe affordability of our progam should not be a barrier to entry for our prospective students. Hence, we have developed the Learn-Then-Earn (LTE) payment credit plan."
  },
  {
    heading: "Learn-Then-Earn (LTE) payment credit",
    description: "The Learn-Then-Earn (LTE) is a financial instrument through our financial partners that allows talented but cash-strapped students to learn on credit. After completion of the program, students will repay the cost of the program at no more than 20% annual premium. Our students are expected to start repaying the credit once they finish the program. It is governed by a legally binding contract."
  }
]

const HeadingCard = (props) => {
  const handleClick = () => {
    props.change(props.id)
  }
  return (
    <StyledHeading color={props.color} onClick={handleClick}>
        <h2 className="title-header">{props.heading}</h2>
        <div className="description">{props.description}</div>
    </StyledHeading>
  )
}

function Card(props) {
  return (
    <StyledItem>
      <div className="highlight-item">
        <div className="description">
          <p>{props.review}</p>
        </div>
      </div>
    </StyledItem>
  )
}

const Finance = () => {
  
  const number = Object.keys(data).length
  const items = Array(number).fill(false, 0, number)
  items[0] = true

  
  const heading = Object.keys(data)[0]
  const [content, setContent] = useState(data[heading])

  const[review, setReview] = useState(data[heading].description)

  const [selectedHeading, setSelectedHeading] = useState(items)
  const changeContent = (id) => {

      const nums = Object.keys(data).length

      const items = Array(nums).fill(false, 0, nums)
      items[id] = true

      setSelectedHeading(items)
      const heading = Object.keys(data)[id]
      setContent(data[heading])
      setReview(data[heading].description)

  }
  return(
    <StyledContainer>
      <div className="container">
        <div className="heading">
          <h1>Flexible Financing Options</h1>
        </div>
        
        <StyledTitle>
          {Object.keys(data).map((item, index) => (
            <div>
              <HeadingCard
                id={index} 
                heading={data[item].heading}
                change={changeContent}
                color={selectedHeading[index]}
              />
            </div>
            ))}
        </StyledTitle>
        <div>
        </div>
        <Card review={review}/>
  </div>
    </StyledContainer>
  )
}

export default Finance;