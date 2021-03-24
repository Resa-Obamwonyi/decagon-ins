import React, {useState } from 'react'
import icon1 from '../../images/icon/how-it-works/icon1.svg'
import icon2 from '../../images/icon/how-it-works/icon2.svg'
import icon3 from '../../images/icon/how-it-works/icon3.svg'
import { StyledDiv, StyledContainer, StyledItem } from './styles'


function Highlight(props) {
  const handleClick = (event) => {
    props.change(props.icon, props.id)
}
  
  return (
    <StyledItem onClick={handleClick} color={props.color}>
      <div>
        <h2>{props.heading}</h2>
        <p className="description">{props.description}</p>
      </div>
    </StyledItem>
  )
}


const Card = () => {
    const data = [
    {heading: 'Recruitment', description: 'We screen to identify fast learners to become Decagon Software Engineers', icon: icon1},
    {heading: 'Training', description: "We deliver an intensive 6 months program (full-stack software development + soft skills)", icon: icon2},
    {heading: 'Placement', description: "We match Decagon engineers with our hiring organizations to join their engineering teams full-time", icon: icon3}
  ]

  const signal = Array(data.length).fill(false, 0, data.length)
  signal[0] = true
  const[selectedArray, setSelectedArray] = useState(signal)
  const [display, setDisplay] = useState(icon1)


  const changeImage = (image, id) => {
    setDisplay(image)
    const newSelectedArray = Array(data.length).fill(false, 0, data.length)
    newSelectedArray[id] = true
    setSelectedArray(newSelectedArray)
  }

  
return(
  <StyledContainer>
    <div>
    <h1 className="heading">How it Works</h1>
  <StyledDiv>
    <div className="text">
      {data.map((item, index) => (
        <Highlight
          id={index}
          heading={item.heading}
          description={item.description}
          icon={item.icon}
          change={changeImage}
          color={selectedArray[index]}
        />
      ))}
    </div>
    <div className="full-image">
      <img src={display} alt="card logo" />
    </div>
  </StyledDiv>
  </div>
  </StyledContainer>

)
}

export default Card;