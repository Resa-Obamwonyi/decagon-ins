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
    margin-bottom: -4em;
    z-index: 100;

    @media(max-width: 657px) {
      margin-bottom: -3em;
    }
`
export const StyledParagraphy = styled.div`
  width: 95%;
  background: #F7F8F0;
  padding: 3em;
  padding-top: 5em;
  font-size: 16px;
  line-height: 32px;
  z-index: 99;
`

export const StyledHeading = styled.div`
    background: ${props => props.color? ' #34A853': 'white'};
    color: ${props => props.color? 'white': 'black'};
    width: 40%;
    padding:2em;
    height: 60px;
    padding: 2rem;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.03);

    h2{
      font-size: 16px;
      line-height: 24px;
    }

    @media(max-width: 657px) {
      /* width: 100%; */
      height: 60px;
      padding: 1em;
      font-size: 16px;
      line-height: 24px;
      h2{
      font-size: 16px;
      line-height: 14px;
    }
    }
  @media(max-width: 790px) {
      height: 70px;
    }
`