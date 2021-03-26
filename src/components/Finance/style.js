import styled from 'styled-components';


export const StyledItem = styled.div`
  .highlight-item {
    display: flex;
    padding: 1em;
    background: #EEF7EC;
    width: 80%;
    height: 80%;
    margin: 2em;
    justify-content: center;
  }
  p {
    text-align: justify;
    font-family: "Mulish", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 2em;
    color: #171825;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    margin: 0.5em;
    object-fit: cover;

  }
  .description {
    width: 80%;
    margin: 2em;
  }
  

  @media (max-width: 990px) {
      .highlight-item {
        flex-direction: column;
        margin: 2em;
        width: 380px;
        min-height: 250px;
        text-align: center;
      }
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
  width: 90%;
  margin: 0 auto;
  font-weight: 700;
  font-family: "Mulish", sans-serif;

  .heading {
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      text-align: center;
      color: #171825;
    }
  }
`;
export const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -5em;

    @media(max-width: 657px) {
      margin-bottom: -4em;
    }
`

export const StyledHeading = styled.div`
    background: ${props => props.color? 'green': 'white'};
    color: ${props => props.color? 'white': 'black'};
    width: 50%;
    height: 20%;
    padding: 1.2em;
    margin: 0;


    @media(max-width: 657px) {
      padding: 3em;
    }
`