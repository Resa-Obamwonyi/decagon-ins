import styled from 'styled-components';


export const StyledItem = styled.div`
  
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
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
    font-size: 16px;
    line-height: 24px;
    color: #171825;
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
      align-items: center;
      margin: 2em;
      font-size: 16px;
      line-height: 24px;
    }
    .heading {
      text-align: center;
    }
    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      text-align: center;
      color: #171825;
    }
    @media(max-width: 657px) {

    }
`
export const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;
    font-size: 16px;
    line-height: 48px;
    margin-bottom: -2em;
    z-index: 100;
`
export const StyledParagraphy = styled.div`
  width: 95%;
  background: #F7F8F0;
  padding: 2em;
  padding-top: 3em;
  font-size: 16px;
  line-height: 32px;
  z-index: 99;
`

export const StyledHeading = styled.div`
    background: ${props => props.color? 'green': 'white'};
    color: ${props => props.color? 'white': 'black'};
    width: 28%;
    /* padding-left: 2rem;
    padding-right: 2rem; */
    padding: 2rem;
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;

    h2{
      font-size: 16px;
      line-height: 24px;
    }

    @media(max-width: 657px) {
      width: 100%;
      padding: 1em;
      font-size: 16px;
      line-height: 24px;
      h2{
      font-size: 16px;
      line-height: 14px;
    }
    }
  /* @media(max-width: 790px) {
      /* height: 110px; */
      /* width: 100%;
      font-size: 14px;
      line-height: 16px; */
    } */
`