import styled from 'styled-components';


export const StyledItem = styled.div`
  
  p {
    font-family: "Mulish", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 2em;
    color: #171825;
  }

  @media (max-width: 990px) {
      p {
        line-height: 1.7em;
      }
      img {
        position: relative;
        width: 90%;
      }
  }
`

export const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #171825;
    font-family: "Mulish", sans-serif;
    justify-content: center;
    text-align: justify;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: content;
      margin: 2em;
    }
    .heading {
      text-align: center;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 2rem;
      font-weight: bold;
    }
    @media(max-width: 657px) {

    }
`
export const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;
    z-index: 999;
`
export const StyledParagraphy = styled.div`
  background: #EEF7EC;
  margin-top: -1em;
  z-index: 990;
  padding: 2em;
  
`

export const StyledHeading = styled.div`
    background: ${props => props.color? 'green': 'white'};
    color: ${props => props.color? 'white': 'black'};
    width: 30%;
    margin: 0;
    text-align: center;
    cursor: pointer;

    @media(max-width: 657px) {
      width: 40%;
      padding: 1em;
    }
`