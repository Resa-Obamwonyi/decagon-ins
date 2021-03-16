import styled from 'styled-components'


const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3em;
  background: #F5F9E7 67%;
  font-weight: 900;
  font-family: "Manrope", sans-serif;

  @media (max-width: 675px) {
    margin-bottom: 4em;
    padding-bottom: 1em;
  }

  .heading {
    padding: 2em;
    padding-bottom: 1em;
    text-align: center;
  }
`

const StyledItem = styled.div`
  background: ${props => props.color ? 'white':''};
  padding: 1em;
  margin: 2em;

  .description {
    padding: 1em;
    font-size: 1em;
    line-height: 2em;
    text-align: justify;
    width: 70%;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 2.5em;

  @media (max-width: 675px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    padding: 3em;
    padding-top:0;
  }

  .full-image {
    min-width: 50px;
    margin-top: 2em;
  }
`

export {StyledDiv, StyledContainer, StyledItem}