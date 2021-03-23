import React, {useState} from 'react';

import {StyledItem, StyledContainer, StyledTitle, StyledParagraphy, StyledHeading } from './style'

const data = [
  {
    heading: "Learn first, Pay later",
    description: "At Decagon, bridging the gap between the best talent and the best opportunities in tech is our priority. We believe affordability of our progam should not be a barrier to entry for our prospective students. Hence, we have developed the Learn-Then-Earn (LTE) payment credit plan.",
    additional: []
  },
  {
    heading: "Learn-Then-Earn (LTE) payment credit",
    description: "The Learn-Then-Earn (LTE) is a financial instrument through our financial partners that allows talented but cash-strapped students to learn on credit. After completion of the program, students will repay the cost of the program at no more than 20% annual premium. Our students are expected to start repaying the credit once they finish the program. It is governed by a legally binding contract.",
    additional: [
      {
        heading: "What are the terms of the LTE payment credit?",
        description: "The LTE credit costs no more than 20% at a reducing balance. Students have up to (but no more than) three years to repay it. Students will start paying back once they secure a job after graduation."
      },
      {
        heading: "To qualify for the LTE credit, prospective students are required to:",
        description: 
        [
          "Submit their HND or Degree Certificate/Statement of Results.",
          "Submit their NYSC certificate or Exemption Letter.",
          "Have a credible guarantor who is financially capable of guaranteeing the full cost of the Decagon tuition and interest accrual. This individual must provide an undated cheque of N3,600,000 addressed to the bank providing the loan. The guarantor will be the signatory to a bank student loan application and will require the disclosure of assets worth N3,600,000."
        ]
      }
    ]
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

const SubContent = (props) => {
  return (
      <div>
        <h2 className="sub-header">{props.heading}</h2>
      <div className="sub-description">
        <ul>
          {
            typeof (props.description) === "object" &&
            props.description.map((item, index) => (<li>{item}</li>))
          }
        </ul>
        
        {typeof (props.description) === "string" &&
          props.description}
    </div>
      </div>
  )
}

function Card(props) {
  return (
    <StyledItem>
      <div className="highlight-item">
        <div className="description">
          <p>{props.review}</p>
        </div>
        {props.additional && props.additional.map((item, index) => (
        <SubContent
          heading={item.heading}
          description={item.description}
        />
        ))}
      </div>
    </StyledItem>
  )
}

const Finance = () => {
  const number = Object.keys(data).length
  const items = Array(number).fill(false, 0, number)
  items[0] = true
  
  const heading = Object.keys(data)[0]

  const [review, setReview] = useState(data[heading].description)
  const [additional, setAdditional] = useState(data[heading].additional)
  
  const [selectedHeading, setSelectedHeading] = useState(items)

  const changeContent = (id) => {

      const nums = Object.keys(data).length

      const items = Array(nums).fill(false, 0, nums)
      items[id] = true

      setSelectedHeading(items)
      const heading = Object.keys(data)[id]

      setReview(data[heading].description)
      setAdditional(data[heading].additional)
  }
  return(
    <StyledContainer>
      <div className="container">
        <div className="heading">
          <h1>Flexible Financing Options</h1>
        </div>
      <div className="content">
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
          <StyledParagraphy>
            <Card review={review}
          additional={additional}
        /> 
      </StyledParagraphy>   
      </div> 
    </div>
    </StyledContainer>
  )
}

export default Finance;