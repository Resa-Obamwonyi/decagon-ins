import styled from 'styled-components'


const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3em;
  padding: 0;
  background: #F5F9E7 67%;
  font-weight: 900;
  font-family: "Manrope", sans-serif;

  h1 {
    font-size: 2em;
  }

  @media only screen 
  and (max-width : 675px) 
  and (max-width : 790px) {
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
  position: relative;
  background: ${props => props.color ? 'white':''};
  padding: 0.5em 0 0.5em 1em;
  margin: 1.5em;
  max-width: 80%;


  .description {
    padding: 0 0 0 0.5em;
    font-size: 1em;
    line-height: 2em;
    text-align: justify;
    width: 70%;
  }
`

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 2.5em 1em;
  max-width: 100%;

  
  .text {
    max-width: 70%;
  }
  .full-image {
    display: flex;
    justify-self: start;

    // justify-content: center;
    // align-items: center;
    max-width: 30%;
    // margin-top: 2em;
  }

  @media (max-width: 675px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    // padding: 3em;
    padding-top:0;

    .text {
    max-width: 100%;
    }

    .full-image {
      display: flex;
      justify-self: start;
      max-width: 100%;
      margin-top: 2em;
    }
  }
`

export {StyledDiv, StyledContainer, StyledItem}